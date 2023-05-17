package com.sanya.blogden.dao;

import com.sanya.blogden.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FollowRepository extends JpaRepository<Follow, Integer> {

    @Query(value = "select follower_id from follow where followee_id=:id",nativeQuery = true)
    public List<Integer> followers(int id);

    @Query(value = "select followee_id from follow where follower_id=:id",nativeQuery = true)
    public List<Integer> following(int id);
}
