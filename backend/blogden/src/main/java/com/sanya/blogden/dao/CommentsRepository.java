package com.sanya.blogden.dao;

import com.sanya.blogden.entity.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentsRepository extends JpaRepository<Comments, Integer> {
}
