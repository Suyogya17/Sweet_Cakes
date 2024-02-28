package com.example.sweet_cakes.repository;

import com.example.sweet_cakes.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
