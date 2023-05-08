package com.sanya.blogden.service;

import com.sanya.blogden.dao.CommentsRepository;
import com.sanya.blogden.entity.Comments;

import java.util.List;
import java.util.Optional;

public class CommentsServiceImpl implements CommentsService{

    CommentsRepository commentsRepository;
    @Override
    public List<Comments> findAll() {
        return commentsRepository.findAll();
    }

    @Override
    public Optional<Comments> findById(int commentsId) {
        return commentsRepository.findById(commentsId);
    }
    @Override
    public Comments save(Comments comment) {
        return commentsRepository.save(comment);
    }

    @Override
    public void deleteById(int commentsId) {
        commentsRepository.deleteById(commentsId);
    }

}
