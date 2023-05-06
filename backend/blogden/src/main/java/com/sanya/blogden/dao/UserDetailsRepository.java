package com.sanya.blogden.dao;

import com.sanya.blogden.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepository extends JpaRepository<UserDetails,Integer> {
}
