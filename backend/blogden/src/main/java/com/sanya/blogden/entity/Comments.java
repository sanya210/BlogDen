package com.sanya.blogden.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @ManyToOne
    @JoinColumn(referencedColumnName = "post_id")
    private Post post;

    @ManyToOne
    @JoinColumn(referencedColumnName = "user_details_id")
    private UserDetails userDetails;

}
