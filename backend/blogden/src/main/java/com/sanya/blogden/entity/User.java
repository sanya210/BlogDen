package com.sanya.blogden.entity;

import com.fasterxml.jackson.annotation.*;
import com.sanya.blogden.token.Token;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Blob;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;

    @ElementCollection(targetClass = Role.class)
    @Enumerated(EnumType.STRING)
    private Role roles;

    @OneToMany(mappedBy = "user")
    private List<Token> tokens;

    @Column(name = "user_email", updatable = false)
    private String userEmail;
    @Column(name = "user_name")
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return userPassword;
    }

    @Override
    public String getUsername() {
        return userEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
//
//    @JsonBackReference
//    @OneToMany(mappedBy = "follower", cascade = CascadeType.ALL)
//    private List<Follow> followers;
//
//    @JsonBackReference
//    @OneToMany(mappedBy = "followee", cascade = CascadeType.ALL)
//    private List<Follow> following;


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