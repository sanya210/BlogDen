package com.sanya.blogden.rest;

import com.sanya.blogden.entity.Post;
import com.sanya.blogden.entity.User;
import com.sanya.blogden.service.PostService;
import com.sanya.blogden.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/post")
@CrossOrigin(origins = "http://localhost:4200")

public class PostRESTController {
    @Autowired
    private PostService postService;
    @Autowired
    private UserService userService;

    @Autowired
    public PostRESTController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("")
    public ResponseEntity<List<Post>> findAll(){
        List<Post> posts = postService.findAll();
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/{postId}")
    public ResponseEntity<Post> getPost(@PathVariable int postId){

        //System.out.println(postId);
        Optional<Post> post = postService.findById(postId);
        //System.out.println(post.get());
        if(post == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(post.get());
    }
    @PostMapping("/byUser")
    public List<Post> getPost(@RequestBody String email){

        System.out.println(email);
        Optional<User> user = userService.findByEmail(email);
        //System.out.println(post.get());
        return postService.findByUserId(user.get().getUserId());
    }

    @PostMapping("/add")
    public ResponseEntity<Post> addPost(@RequestBody Post post){
        //System.out.println(post);
        post.setPostId(0);
        Optional<User> user = userService.findByEmail(post.getUser().getEmail());
        post.setUser(user.get());
        Post savedPost = postService.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPost);
    }
    @PutMapping("/edit")
    public ResponseEntity<Post> updatePost(@RequestBody Post post){

        Post updatedPost = postService.save(post);
        return ResponseEntity.ok(updatedPost);
    }
    @DeleteMapping("/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable int postId){

        Optional<Post> post = postService.findById(postId);

        if(post.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        postService.deleteById(postId);

        return ResponseEntity.ok("Deleted post id - " + postId);
    }
}
