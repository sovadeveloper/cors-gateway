package com.sovadeveloper.testservice.controller;

import com.sovadeveloper.testservice.model.SomeModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping
    public SomeModel getTest() {
        return SomeModel.builder()
                .name("Тестовое имя")
                .count(10)
                .build();
    }

    @PostMapping
    public SomeModel postTest(@RequestBody SomeModel someModel) {
        someModel.setCount(999);
        someModel.setName("Edited in Java");
        return someModel;
    }
}
