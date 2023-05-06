package com.sanya.blogden.service;

import com.sanya.blogden.dao.CategoryRepository;
import com.sanya.blogden.entity.Category;

import java.util.List;
import java.util.Optional;

public class CategoryServiceImpl implements CategoryService{

    private CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findById(int categoryId) {
        Optional<Category> result = categoryRepository.findById(categoryId);

        Category category = null;

        if(result.isPresent()){
            category = result.get();
        }
        else{
            throw new RuntimeException("Did not find category id - " + categoryId);
        }
        return category;
    }

    @Override
    public Category save(Category theCategory) {
        return categoryRepository.save(theCategory);
    }

    @Override
    public void deleteById(int categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
