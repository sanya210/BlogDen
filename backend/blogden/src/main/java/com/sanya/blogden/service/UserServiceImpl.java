package com.sanya.blogden.service;

import com.sanya.blogden.dao.UserRepository;
import com.sanya.blogden.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(int userId) {
        return userRepository.findById(userId);
    }

    @Override
    public User save(User user) {

        return userRepository.save(user);
    }


    @Override
    public void deleteById(int userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
