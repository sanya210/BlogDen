package com.sanya.blogden.service;

import com.sanya.blogden.dao.PostRepository;
import com.sanya.blogden.dao.UserRepository;
import com.sanya.blogden.entity.Post;
import com.sanya.blogden.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{
    PostRepository postRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Optional<Post> findById(int postId) {
        return postRepository.findById(postId);
    }

    @Override
    public List<Post> findByUserId(int id) {
        return postRepository.findByUserId(id);
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
