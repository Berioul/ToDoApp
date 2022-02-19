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
        return todoRepo.getAllItems();
    }

    public Item needItem(int id) {
        return todoRepo.getItem(id);
    }

    public void addThisItem(Item itemToAdd) {
        todoRepo.saveItem(itemToAdd);
    }

    public void deleteItem(int id) {
        todoRepo.deletItem(id);
    }

    public void complitItem(int id) {
        Item item = todoRepo.getItem(id);
        item.setDone(true);

    }
}