package com.sanya.blogden.rest;

import com.sanya.blogden.dao.UserRepository;
import com.sanya.blogden.entity.Comments;
import com.sanya.blogden.entity.Follow;
import com.sanya.blogden.entity.Post;
import com.sanya.blogden.entity.User;
import com.sanya.blogden.service.FollowService;
import com.sanya.blogden.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/follow")
@CrossOrigin(origins = "*")

public class FollowRESTController {
    @Autowired
    private FollowService followService;
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepo;

//    @Autowired
//    public FollowRESTController(FollowService followService) {
//        this.followService = followService;
//    }
    @PostMapping("/save")
    public ResponseEntity<Follow> addFollow(@RequestBody Follow follow){
        follow.setFollowId(0);

        Follow savedFollower = followService.save(follow);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFollower);
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Follow>> findAll(){
        List<Follow> posts = followService.findAll();
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/getFollowers/{id}")
    public List<User> getFollowers(@PathVariable int id){
        return userRepo.findAllById(followService.followers(id));
    }

    @GetMapping("/getFollowing/{id}")
    public List<User> getFollowing(@PathVariable int id){
        return userRepo.findAllById(followService.following(id));
    }


}
