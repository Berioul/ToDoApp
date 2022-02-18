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
    void integrationTest(){
        Item Bonbon = new Item("bonbon",890);
        Item Bonbon1 = new Item("bonbon1",8901);
        Item Bonbon2 = new Item("bonbon2",8902);

        restTemplate.postForEntity("/todo",Bonbon1,Void.class);
        restTemplate.postForEntity("/todo",Bonbon2,Void.class);
        restTemplate.postForEntity("/todo",Bonbon,Void.class);
       Item[] loulou = restTemplate.getForObject("/todo",Item[].class);
        assertTrue(loulou.length == 3);

    }





}