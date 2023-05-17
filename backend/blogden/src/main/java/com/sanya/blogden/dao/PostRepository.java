package com.sanya.blogden.dao;

import com.sanya.blogden.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Integer> {

    @Query(value = "select * from post  where user_id = :id ",nativeQuery = true)
    List<Post> findByUserId(int id);
}
