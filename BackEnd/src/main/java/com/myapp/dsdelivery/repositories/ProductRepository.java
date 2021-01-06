package com.myapp.dsdelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myapp.dsdelivery.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	List<Product> findAllByOrderByNameAsc(); //metodo já pronto  do framework spring para listar na ordem (ver documentação) 

}
