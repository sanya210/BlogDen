package com.sanya.blogden.service;

import com.sanya.blogden.entity.Comments;
import com.sanya.blogden.entity.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<Post> findAll();

    Optional<Post> findById(int postId);

    Post save(Post post);

    void deleteById(int postId);
}
