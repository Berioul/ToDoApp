package com.example.demo;

import java.util.Objects;
import java.util.UUID;

public class Item {
    private String beschreibung;
    private String title;
    private String id = UUID.randomUUID().toString();
    private boolean done;


    public Item(String title, String id,String beschreibung) {
        this.title = title;
        this.id = id;
        this.beschreibung = beschreibung;
        done = false;
    }

    public Item() {
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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
