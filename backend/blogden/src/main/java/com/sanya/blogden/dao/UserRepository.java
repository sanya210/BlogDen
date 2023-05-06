package com.sanya.blogden.dao;

import com.sanya.blogden.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
