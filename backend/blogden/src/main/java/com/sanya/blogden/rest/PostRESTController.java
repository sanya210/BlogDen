package com.sanya.blogden.rest;

import com.sanya.blogden.entity.Post;
import com.sanya.blogden.entity.User;
import com.sanya.blogden.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/post")
public class PostRESTController {
    private PostService postService;

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

        Optional<Post> post = postService.findById(postId);

        if(post == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(post.get());
    }

    @PostMapping("/add")
    public ResponseEntity<Post> addPost(@RequestBody Post post){
        post.setPostId(0);

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
