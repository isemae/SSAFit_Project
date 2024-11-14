package com.ssafit.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafit.model.dto.User;
import com.ssafit.model.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:5173/*", "http://localhost:5174/*"}) // TODO origin 허용할 uri 작성
public class UserController {
	private final UserService userService;
	// 생성자로 의존성 주입
	public UserController(UserService userService) {
		this.userService = userService;
	}

//////////////////////////////////////////////////////////////
	// 1. 특정 유저 정보 전체 조회
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserInfo(@PathVariable int userId) {
		User userInfo = userService.getUserInfo(userId);
		
		if(userInfo == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("유저 정보가 존재하지 않습니다.");
		}
		
		return new ResponseEntity<User>(userInfo, HttpStatus.OK);
	}
	
	// 2. 유저의 건강력 조회
	
	
	// 3. 유저가 건강 관리한 연속 일수
	
	
	// 4. 유저의 등급 조회
	
	
	// 5. 쥬어가 획득한 총 카드 수 조회
}
