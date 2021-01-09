import { useEffect, useState } from 'react';
import './style.css';
import StepHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState();

    //console.log(products);

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);



return(
        <div className="orders-container">
            <StepHeader />
            <ProductsList products={products} />
            <OrderLocation />
        </div>
    )
}
export default Orders;