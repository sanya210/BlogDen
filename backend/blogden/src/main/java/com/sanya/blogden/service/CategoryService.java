package com.sanya.blogden.service;

import com.sanya.blogden.dao.CategoryRepository;
import com.sanya.blogden.entity.Category;

import java.util.List;

public interface CategoryService {

    List<Category> findAll();

    Category findById(int categoryId);

    Category save(Category theCategory);

    void deleteById(int categoryId);
}
