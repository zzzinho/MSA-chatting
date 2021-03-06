package com.example.chatroomcreator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ChatroomCreatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChatroomCreatorApplication.class, args);
	}

}
