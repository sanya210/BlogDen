package com.sanya.blogden.rest;

import com.sanya.blogden.entity.User;
import com.sanya.blogden.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserRESTController {
    private UserService userService;

    @Autowired
    public UserRESTController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public List<User> findAll(){
        return userService.findAll();
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        user.setUserId(0);


        return  userService.save(user);
    }
}
