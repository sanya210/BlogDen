package com.sanya.blogden.service;

import com.sanya.blogden.dao.FollowRepository;
import com.sanya.blogden.entity.Follow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowServiceImpl implements FollowService{

    @Autowired
    FollowRepository followRepository;

    @Override
    public List<Follow> findAll() {
        return followRepository.findAll();
    }

    @Override
    public Follow save(Follow follow) {
        return followRepository.save(follow);
    }

    @Override
    public List<Follow> findByUserid(int userId) {
        return null;
    }
}
