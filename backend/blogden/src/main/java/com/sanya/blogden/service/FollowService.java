package com.sanya.blogden.service;

import com.sanya.blogden.dao.FollowRepository;
import com.sanya.blogden.entity.Follow;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FollowService {

    List<Follow> findAll();
    Follow save(Follow follow);

    List<Follow> findByUserid(int userId);

}
