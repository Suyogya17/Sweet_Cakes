package com.example.sweet_cakes.service;

import com.example.sweet_cakes.dto.AuthenticateRequest;
import com.example.sweet_cakes.dto.AuthenticateResponse;

public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
