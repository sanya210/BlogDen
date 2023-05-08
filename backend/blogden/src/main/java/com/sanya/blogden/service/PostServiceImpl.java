package com.sanya.blogden.service;

import com.sanya.blogden.dao.PostRepository;
import com.sanya.blogden.entity.Post;

import java.util.List;
import java.util.Optional;

public class PostServiceImpl implements PostService{
    PostRepository postRepository;
    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Optional<Post> findById(int postId) {
        return postRepository.findById(postId);
    }

    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void deleteById(int postId) {
        postRepository.deleteById(postId);
    }
}
