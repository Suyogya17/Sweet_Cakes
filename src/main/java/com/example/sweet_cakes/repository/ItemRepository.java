package com.example.sweet_cakes.repository;

import com.example.sweet_cakes.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface ItemRepository extends JpaRepository <Item, Integer> {
    Optional<Item> findByItemName(String itemName);

}
