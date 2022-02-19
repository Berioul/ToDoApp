package com.example.demo;

import java.util.Objects;

public class Item {
    private String title;
    private int id;
    private boolean done;


    public Item(String title, int id) {
        this.title = title;
        this.id = id;
        done = false;
    }

    public Item() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return id == item.id && done == item.done && Objects.equals(title, item.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, id, done);
    }
}
