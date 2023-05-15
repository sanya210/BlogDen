package com.sanya.blogden.service;

import com.sanya.blogden.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    List<User> findAll();

    Optional<User> findById(int userId);

    User save(User user);

    void deleteById(int userId);

    Optional<User> findByEmail(String email);
}
