package com.example.demo;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Objects;
import java.util.UUID;
@Data
public class Item {
    private String beschreibung;
    private String title;
    @Id
    private String id ;
    private boolean done;


    public Item(String title,String beschreibung) {
        this.title = title;
        this.beschreibung = beschreibung;
        done = false;
    }

    public Item() {
    }


}
