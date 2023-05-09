package com.sanya.blogden.entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;
import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private int userId;

    @Column(name="user_role")
    private String userRole;

    @Column(name = "user_email",updatable = false)
    private String userEmail;
    @Column(name="user_name")
    private String userName;

    @Column(name = "user_password")
    private String userPassword;

    @Column(name = "user_first_name")
    private String userFirstName;

    @Column(name = "user_last_name")
    private String userLastName;

    @Column(name = "user_photo")
    private String userPhoto;

    @Column(name = "user_desc")
    private String userDesc;

    @Column(name = "user_occupation")
    private String userOccupation;
//
//    @JsonBackReference
//    @OneToMany(mappedBy = "follower", cascade = CascadeType.ALL)
//    private List<Follow> followers;
//
//    @JsonBackReference
//    @OneToMany(mappedBy = "followee", cascade = CascadeType.ALL)
//    private List<Follow> following;

}
//    @ManyToMany
//    @JoinTable(
//            name = "follow",
//            joinColumns = @JoinColumn(name = "follower_id", referencedColumnName = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "followee_id", referencedColumnName = "user_id"))
//    Set<User> followerSet;

//    @ManyToMany
//    @JoinTable(
//            name = "following",
//            joinColumns = @JoinColumn(name = "followee_id", referencedColumnName = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "follower_id", referencedColumnName = "user_id"))
//    Set<User> followeeSet;