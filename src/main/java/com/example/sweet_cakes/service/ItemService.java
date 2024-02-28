package com.example.sweet_cakes.service;

import com.example.sweet_cakes.dto.ItemDto;
import com.example.sweet_cakes.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    String save(ItemDto itemDto);

    List<Item> getAll();
    Optional<Item> getById(Integer id);
    void deleteById(Integer id);
}
