package com.sanya.blogden.entity;

import jakarta.persistence.*;

import java.sql.Blob;

@Entity
@Table(name="user_details")
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_details_id")
    private int userDetailsId;

    @Column(name = "user_first_name")
    private String userFirstName;

    @Column(name = "user_last_name")
    private String userLastName;

    @Column(name = "user_photo")
    private Blob userPhoto;

    @Column(name = "user_desc")
    private String userDesc;

    @Column(name = "user_occupation")
    private String userOccupation;

    @Column(name = "user_email")
    private String userEmail;
}
