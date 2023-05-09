package com.sanya.blogden.rest;

import com.sanya.blogden.entity.User;
import com.sanya.blogden.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/{userId}")
    public Optional<User> getUser(@PathVariable int userId){

        Optional<User> user = userService.findById(userId);

        if(user == null){
            throw new RuntimeException("User not found - "+ userId);
        }
        return user;
    }


    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        user.setUserId(0);

        return  userService.save(user);
    }

    @PutMapping("/edit")
    public User updateUser(@RequestBody User user){
        User user = userService.save(user);

        return user;
    }

}
