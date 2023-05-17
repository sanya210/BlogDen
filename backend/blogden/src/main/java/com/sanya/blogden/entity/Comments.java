package com.sanya.blogden.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

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

    @Column(name="created_at")
    private Timestamp createdAt;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name= "post_id", referencedColumnName = "post_id")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "user_id")
    private User user;

}
