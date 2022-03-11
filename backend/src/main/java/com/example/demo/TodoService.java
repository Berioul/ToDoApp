package com.example.demo;


import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class TodoService {

    private TodoRepo todoRepo;

    public TodoService(TodoRepo todoRepo) {
        this.todoRepo = todoRepo;
    }


    public List<Item> needallitems() {
        return todoRepo.findAll();
    }

    public Item needItem(String id) {
        return todoRepo.findById(id).orElse(null);
    }

    public void addThisItem(Item itemToAdd) {
        todoRepo.save(itemToAdd);
    }

    public void deleteItem(String id) {
        todoRepo.deleteById(id);
    }

    public void complitItem(String id) {
         todoRepo.findById(id).ifPresent(item -> item.setDone(true));


    }
}