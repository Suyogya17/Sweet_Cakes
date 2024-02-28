package com.example.sweet_cakes.service;

import com.example.sweet_cakes.dto.UserDto;
import com.example.sweet_cakes.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    String save(UserDto userDto);

    List<User> getAll();

    Optional<User> getById(Integer id);

    void deleteById(Integer id);
}
