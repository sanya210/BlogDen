package com.sanya.blogden.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="post_id")
    private int postId;
    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "user_id",referencedColumnName = "user_id")
    private User user;
    @Column(name = "post_category")
    private String postCategory;
    @Column(name = "post_title")
    private String postTitle;

    @Column(name="post_content")
    private String postContent;

    @Column(name="posted_on")
    private Date postedOn;

    @Column(name="modified_on")
    private Date modifiedOn;

}
