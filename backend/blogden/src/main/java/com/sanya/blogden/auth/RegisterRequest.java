package com.sanya.blogden.auth;

import com.sanya.blogden.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String email;
    private String userPassword;
    private String userFirstName;
    private String userLastName;
    private String userPhoto;
    private String userDesc;
    private Role role;

//
//    private String firstname;
//    private String lastname;
//    private String email;
//    private String password;
//    private Role role;
}