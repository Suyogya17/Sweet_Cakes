package com.example.sweet_cakes.service;

import com.example.sweet_cakes.dto.OrderDto;
import com.example.sweet_cakes.entity.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    String save(OrderDto orderDTO);

    String createOrder(OrderDto orderDTO);

    List<Order> getAllOrders();

    Optional<Order> getOrderById(Integer id);

    void deleteOrderById(Integer id);


}