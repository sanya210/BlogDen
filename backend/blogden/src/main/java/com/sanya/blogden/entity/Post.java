package com.sanya.blogden.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="post_id")
    private int postId;

    @Column(name = "post_title")
    private String postTitle;

    @Column(name="post_content")
    private String postContent;

    @Column(name="posted_on")
    private Date postedOn;

    @Column(name="modified_on")
    private Date modifiedOn;

}
