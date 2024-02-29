package com.example.sweet_cakes.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class ItemDto {

    private Integer id;

    @NotNull
    private String itemName;

    @NotNull
    private byte[] image;

    @NotNull
    private String price;

    @NotNull
    private String quantity;

    @NotNull
    private String description;
}