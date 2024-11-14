package com.ssafit.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:5173/*", "http://localhost:5174/*"}) // TODO origin 허용할 uri 작성
public class UserController {
	// 1. 특정 유저 정보 전체 조회
	
	
	// 2. 유저의 건강력 조회
	
	
	// 3. 유저가 건강 관리한 연속 일수
	
	
	// 4. 유저의 등급 조회
	
	
	// 5. 쥬어가 획득한 총 카드 수 조회
}
