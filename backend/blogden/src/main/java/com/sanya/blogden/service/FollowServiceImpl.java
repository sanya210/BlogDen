package com.sanya.blogden.service;

import com.sanya.blogden.dao.FollowRepository;
import com.sanya.blogden.dao.UserRepository;
import com.sanya.blogden.entity.Follow;
import com.sanya.blogden.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FollowServiceImpl implements FollowService{

    @Autowired
    FollowRepository followRepository;

    @Autowired
    UserRepository userRepository;
    @Override
    public List<Follow> findAll() {
        return followRepository.findAll();
    }

    @Override
    public Follow save(Follow follow) {
        Optional<User> tempUser = userRepository.findById(follow.getFollower().getUserId());
        follow.setFollower(tempUser.get());
        tempUser = userRepository.findById(follow.getFollowee().getUserId());
        follow.setFollowee(tempUser.get());
        return followRepository.save(follow);
    }

    @Override
    public List<Follow> findByUserid(int userId) {
        return null;
    }

    @Override
    public List<Integer> followers(int followeeId) {
        return followRepository.followers(followeeId);
    }

    @Override
    public List<Integer> following(int followerId) {
        return followRepository.following(followerId);
    }
}
