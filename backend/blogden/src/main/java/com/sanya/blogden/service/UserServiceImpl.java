package com.sanya.blogden.service;

import com.sanya.blogden.dao.UserRepository;
import com.sanya.blogden.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(int userId) {
        return userRepository.findById(userId);
    }

    @Override
    public User save(User user) {
//        System.out.println(!user.getUserEmail().isEmpty()+user.getUserEmail());
//        if(!user.getUserEmail().isEmpty()){
//            Optional<User> existingUserOptional = userRepository.findById(user.getUserId());
//
//            if(existingUserOptional.isPresent()){
//                User existingUser = existingUserOptional.get();
//                existingUser.setUserRole(user.getUserRole());
//                //existingUser.setUserEmail(user.getUserEmail());
//                existingUser.setUserName(user.getUserName());
//                existingUser.setUserPassword(user.getUserPassword());
//                existingUser.setUserFirstName(user.getUserFirstName());
//                existingUser.setUserLastName(user.getUserLastName());
//                existingUser.setUserPhoto(user.getUserPhoto());
//                existingUser.setUserDesc(user.getUserDesc());
//                existingUser.setUserOccupation(user.getUserOccupation());
//
//                return userRepository.save(existingUser);
//            }
//
//            throw new IllegalArgumentException("User not found");
//        }
//        else{
//            return userRepository.save(user);
//        }
        return userRepository.save(user);
    }


    @Override
    public void deleteById(int userId) {
        userRepository.deleteById(userId);
    }
}
