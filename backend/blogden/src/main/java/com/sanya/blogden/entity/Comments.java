package com.sanya.blogden.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import static jakarta.persistence.CascadeType.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="comments")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comments_id")
    private int commentsId;

    @Column(name="comment_desc")
    private String commentDesc;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name= "post_id", referencedColumnName = "post_id")
    private Post post;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "user_id",referencedColumnName = "user_id")
    private User user;

}
