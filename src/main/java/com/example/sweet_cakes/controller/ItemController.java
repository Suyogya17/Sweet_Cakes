package com.example.sweet_cakes.controller;

import com.example.sweet_cakes.dto.ItemDto;
import com.example.sweet_cakes.entity.Item;
import com.example.sweet_cakes.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Item")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/data")
    public String getData() {
        return "data retrieved";
    }

    @PostMapping("/save")
    public ResponseEntity<String> createData(
            @RequestPart("itemName") String itemName,
            @RequestPart("description") String description,
            @RequestPart("price") String price,
            @RequestPart("quantity") String quantity,
            @RequestPart("imageUrl") String imageUrl) {

        try {
            ItemDto itemDto = new ItemDto(null, itemName, imageUrl, price, quantity, description);
            itemService.save(itemDto);
            return ResponseEntity.ok("created data");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error creating data");
        }
    }



    @GetMapping("/getAll")
    public List<Item> getAllData() {
        return itemService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Item> getById(@PathVariable("id") Integer id) {
        return itemService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        itemService.deleteById(id);
    }
}
