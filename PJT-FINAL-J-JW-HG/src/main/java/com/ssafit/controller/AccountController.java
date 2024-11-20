package com.ssafit.controller;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	/** 
	 * @param User 
	 * {
	 * 	loginId,
	 * 	password
	 * }
	 * @return Boolean
	 * true/false	 
	 */
	@PostMapping("/login")
	public ResponseEntity<?> tryLogin(@RequestBody User user) {
		try {
			// input value
			String newUserId = user.getLoginId();
			String newUserPassword = user.getPassword();
			
			// db value
			String userPassword = userService.getInfoForLoginTry(newUserId);
			
			// 비밀번호 조회가 되지 않으면 -> 아이디 이상함
			if(userPassword == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("아이디가 일치하지 않습니다.");
			}
			
			System.out.println(newUserPassword);
			System.out.println(userPassword);
			
			// 원래는 여기서 bcrypt의 compare를 활용해서 일치 여부 검증함
			// 일단은 단순 plain text 비교
			if(!newUserPassword.equals(userPassword)) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("비밀번호가 일치하지 않습니다.");
			}
			
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		}
		catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}
	}
	
	
	// 2. 회원가입
	/** 
	 * @param User
	 * {
	 * 	loginId,
	 * 	password,
	 * 	userName
	 * }
	 * @return Boolean
	 * true/false
	 */
	@PostMapping("/regist")
	public ResponseEntity<?> tryRegist(@RequestBody User user) {
		try {			
			// 서비스 호출
			int isUserRegisted = userService.tryRegist(user);
			
			if(isUserRegisted == -1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("등록에 실패했습니다.");				
			}
						
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		}
		catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}
	}
}
