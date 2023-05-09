package com.sanya.blogden.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "follow")
public class Follow{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "follow_id")
    private int followId;

    @ManyToOne
//    @JsonManagedReference
    @JoinColumn(name = "follower_id")
    private User follower;

    @ManyToOne
//    @JsonManagedReference
    @JoinColumn(name = "followee_id")
    private User followee;

}
