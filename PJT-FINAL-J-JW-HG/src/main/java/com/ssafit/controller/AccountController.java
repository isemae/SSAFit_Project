package com.ssafit.controller;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafit.model.dto.User;
import com.ssafit.model.service.UserService;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = {"http://localhost:5173/*", "http://localhost:5174/*"}) // TODO origin 허용할 uri 작성
public class AccountController {
	private final UserService userService;
	// 생성자로 의존성 주입
	public AccountController(UserService userService) {
		this.userService = userService;
	}

	//////////////////////////////////////////////////////////////
	// 1. 로그인
	/* return: 
	 true/false
	 */
	@GetMapping("/login")
	public ResponseEntity<?> tryLogin(@RequestBody User user) {
		try {
			return null;
		}
		catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}
	}
}
