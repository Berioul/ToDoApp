package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class TodoRepo {
    private List<Item> allItems = new ArrayList<>();


    public List<Item> getAllItems() {
        return allItems;
    }

    public Item getItem(int id) {
        return allItems.stream()
                .filter(item -> item.getId()==id)
                .findFirst()
                .orElse(null);
    }

    public void saveItem(Item itemToAdd) {
        allItems.add(itemToAdd);
    }

    public void deletItem(int id) {
        allItems.removeIf(item -> item.getId()==id);

    }
}
