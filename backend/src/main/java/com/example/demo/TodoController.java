package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/todo")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    private List<Item> getallItems() {
        return todoService.needallitems();

    }

    @GetMapping("/{id}")
    public Item needItem(@PathVariable String id) {

        return todoService.needItem(id);
    }

    @PostMapping
    public void addNewItem(@RequestBody Item itemToAdd) {
        todoService.addThisItem(itemToAdd);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable String id) {
        todoService.deleteItem(id);
    }

    @PutMapping("/{id}")
    public void itemDone(@PathVariable String id) {
        todoService.complitItem(id);

    }

}