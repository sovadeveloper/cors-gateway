package com.sovadeveloper.testservice.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class SomeModel {

    private String name;

    private int count;
}
