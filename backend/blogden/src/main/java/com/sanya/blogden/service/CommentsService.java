package com.sanya.blogden.service;

import com.sanya.blogden.entity.Comments;

import java.util.List;
import java.util.Optional;

public interface CommentsService {
    List<Comments> findAll();

    Optional<Comments> findById(int commentsId);

    Comments save(Comments comment);

    void deleteById(int commentsId);

}
