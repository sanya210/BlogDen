package com.sanya.blogden.rest;

import com.sanya.blogden.entity.Comments;
import com.sanya.blogden.entity.Post;
import com.sanya.blogden.entity.User;
import com.sanya.blogden.service.CommentsService;
import com.sanya.blogden.service.PostService;
import com.sanya.blogden.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "*")

public class CommentsRESTController {

    @Autowired
    private CommentsService commentsService;
    @Autowired
    private UserService userService;
    @Autowired
    private PostService postService;

//    @Autowired
//    public CommentsRESTController(CommentsService commentsService) {
//        this.commentsService = commentsService;
//    }
    @GetMapping("")
    public ResponseEntity<List<Comments>> findAll(){
        List<Comments> comments = commentsService.findAll();
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<Comments> getComment(@PathVariable int commentId){

        Optional<Comments> comment = commentsService.findById(commentId);

        if(comment.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(comment.get());
    }
    @GetMapping("/byPostId/{postId}")
    public List<Comments> getAllPostComments(@PathVariable int postId){
        return commentsService.findByPostId(postId);
    }
    @PostMapping("/add")
    public ResponseEntity<Comments> addComment(@RequestBody Comments comment){
        comment.setCommentsId(0);
        Optional<User> user = userService.findByEmail(comment.getUser().getEmail());
//        Optional<User> user = userService.findById(comment.getUser().getUserId());
        comment.setUser(user.get());

        System.out.println(comment.getPost().getPostId());

        Optional<Post> post = postService.findById(comment.getPost().getPostId());
        comment.setPost(post.get());
        Comments savedComment = commentsService.save(comment);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedComment);
    }
    @PutMapping("/edit")
    public ResponseEntity<Comments> updateComment(@RequestBody Comments comment){

        Comments updatedComment = commentsService.save(comment);
        return ResponseEntity.ok(updatedComment);
    }
    @DeleteMapping("/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable int commentId){

        Optional<Comments> comment = commentsService.findById(commentId);

        if(comment.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        commentsService.deleteById(commentId);

        return ResponseEntity.ok("Deleted comment id - " + commentId);
    }
}
