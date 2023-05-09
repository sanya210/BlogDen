package com.sanya.blogden.rest;

import com.sanya.blogden.entity.Comments;
import com.sanya.blogden.entity.Follow;
import com.sanya.blogden.entity.Post;
import com.sanya.blogden.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/follow")
public class FollowRESTController {
    @Autowired
    private FollowService followService;

//    @Autowired
//    public FollowRESTController(FollowService followService) {
//        this.followService = followService;
//    }
    @PostMapping("/save")
    public ResponseEntity<Follow> addComment(@RequestBody Follow follow){
        follow.setFollowId(0);

        Follow savedFollower = followService.save(follow);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFollower);
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Follow>> findAll(){
        List<Follow> posts = followService.findAll();
        return ResponseEntity.ok(posts);
    }
}
