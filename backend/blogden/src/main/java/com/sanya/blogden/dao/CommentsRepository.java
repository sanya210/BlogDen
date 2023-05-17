package com.sanya.blogden.dao;

import com.sanya.blogden.entity.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentsRepository extends JpaRepository<Comments, Integer> {
    @Query(value = "select * from comments  where post_id = :id ",nativeQuery = true)
    List<Comments> findByPostId(int id);
}
