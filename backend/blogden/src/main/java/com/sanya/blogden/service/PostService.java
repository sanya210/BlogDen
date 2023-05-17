package com.sanya.blogden.service;

import com.sanya.blogden.entity.Post;
import com.sanya.blogden.entity.User;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<Post> findAll();

    Optional<Post> findById(int postId);

    List<Post> findByUserId(int id);

    Post save(Post post);

    void deleteById(int postId);
}
