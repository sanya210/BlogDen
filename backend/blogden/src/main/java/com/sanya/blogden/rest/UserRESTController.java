package com.sanya.blogden.rest;

import com.sanya.blogden.entity.User;
import com.sanya.blogden.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")

public class UserRESTController {
    private UserService userService;

    @Autowired
    public UserRESTController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("getAll")
    public ResponseEntity<List<User>> findAll(){
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUser(@PathVariable int userId){

        Optional<User> user = userService.findById(userId);

        if(user.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(user.get());
    }
    @PostMapping("/byUserEmail")
    public ResponseEntity<User> getUserByEmail(@RequestBody String email){
        Optional<User> user = userService.findByEmail(email);

        return ResponseEntity.ok(user.get());
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user){
        user.setUserId(0);

        User savedUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    @PutMapping("/edit")
    public ResponseEntity<User> updateUser(@RequestBody User user){

        User updatedUser = userService.save(user);
        return ResponseEntity.ok(updatedUser);
    }
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable int userId){

        Optional<User> user = userService.findById(userId);

        if(user.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        userService.deleteById(userId);

        return ResponseEntity.ok("Deleted user id - " + userId);
    }

}
