package com.myapp.dsdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myapp.dsdelivery.entities.Product;

public interface OrderRepository extends JpaRepository<Product, Long>{

}
