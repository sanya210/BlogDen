package com.sanya.blogden.service;

import com.sanya.blogden.entity.Comments;

import java.util.List;

public interface CommentsService {
    List<Comments> findAll();

    Comments findById(int commentsId);

    Comments save(Comments comment);

    void deleteById(int commentsId);

    Comments findByPostId(int postId);

}
