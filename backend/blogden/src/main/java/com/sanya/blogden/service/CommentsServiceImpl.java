package com.sanya.blogden.service;

import com.sanya.blogden.dao.CommentsRepository;
import com.sanya.blogden.entity.Comments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentsServiceImpl implements CommentsService{

    CommentsRepository commentsRepository;

    @Autowired
    public CommentsServiceImpl(CommentsRepository commentsRepository) {
        this.commentsRepository = commentsRepository;
    }

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
    public List<Comments> findByPostId(int id) {
        return commentsRepository.findByPostId(id);
    }

    @Override
    public void deleteById(int commentsId) {
        commentsRepository.deleteById(commentsId);
    }

}
