package com.sanya.blogden.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;
import java.util.List;

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

    @Column(name = "user_email")
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

    @OneToMany(mappedBy = "follower", cascade = CascadeType.ALL)
    private List<Follow> followers;

    @OneToMany(mappedBy = "followee", cascade = CascadeType.ALL)
    private List<Follow> following;

}
