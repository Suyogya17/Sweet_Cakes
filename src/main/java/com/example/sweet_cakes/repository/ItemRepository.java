package com.example.sweet_cakes.repository;

import com.example.sweet_cakes.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ItemRepository extends JpaRepository <Item, Integer> {

}
