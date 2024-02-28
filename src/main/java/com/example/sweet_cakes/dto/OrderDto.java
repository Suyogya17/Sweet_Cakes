package com.example.sweet_cakes.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private Integer id;


    @NotNull
    private String orderDetail;
}