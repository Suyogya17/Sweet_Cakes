package com.example.sweet_cakes.controller;

import com.example.sweet_cakes.dto.OrderDto;
import com.example.sweet_cakes.entity.Order;
import com.example.sweet_cakes.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/data")
    public ResponseEntity<String> getData() {
        return ResponseEntity.ok("Data retrieved");
    }

    @PostMapping("/save")
    public ResponseEntity<String> createOrder(@RequestBody OrderDto orderDto) {
        // Your logic to create the order
        System.out.println(orderDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Order created");
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("get-by-id/{id}")
    public ResponseEntity<Optional<Order>> getOrderById(@PathVariable("id") Integer id) {
        Optional<Order> order = orderService.getOrderById(id);
        if (order.isPresent()) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete-by-id/{id}")
    public ResponseEntity<Void> deleteOrderById(@PathVariable("id") Integer id) {
        orderService.deleteOrderById(id);
        return ResponseEntity.noContent().build();
    }
}
