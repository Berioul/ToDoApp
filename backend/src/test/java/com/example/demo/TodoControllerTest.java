package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void returnAllItemsTest(){
        Item Bonbon = new Item("bonbon","chocolat");
        Item Bonbon1 = new Item("bonbon1","lait");
        Item Bonbon2 = new Item("bonbon2","menthe");

        restTemplate.postForEntity("/todo",Bonbon1,Void.class);
        restTemplate.postForEntity("/todo",Bonbon2,Void.class);
        restTemplate.postForEntity("/todo",Bonbon,Void.class);
       Item[] loulou = restTemplate.getForObject("/todo",Item[].class);
        assertTrue(loulou.length == 3);

    }
}