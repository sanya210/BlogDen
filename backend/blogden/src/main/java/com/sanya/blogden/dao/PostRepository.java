package com.sanya.blogden.dao;

import com.sanya.blogden.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Integer> {
}
