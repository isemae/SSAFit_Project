package com.ssafit.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafit.model.dto.User;
import com.ssafit.model.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"}) // TODO origin 허용할 uri 작성
public class UserController {
	private final UserService userService;
	// 생성자로 의존성 주입
	public UserController(UserService userService) {
		this.userService = userService;
	}

//////////////////////////////////////////////////////////////
	// 1. 특정 유저 정보 전체 조회
	/* return:
	 { 
		id,
		loginId,
		userName,
		score,
		totalCardCount,
		tier
	  }
	 */
	// TODO 99. path variable -> localStorage에 저장돼있는 token을 활용해서 userId 보내기
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserInfo(@PathVariable int userId) {	
		try {
			// service 호출
			User userInfo = userService.getUserInfo(userId);
			
			// 만약 service -> dao -> db 통신에서 실패한다면
			if(userInfo == null) {
				//TODO 99. 존재하지 않는 유저에 접근할 시 예외 처리 <- token의 userId로 접근할 경우엔 refresh 토큰과 비교하고 아닐 시로 변경 필요
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("유저 정보가 존재하지 않습니다.");			
			}		
				
			// 정상 로직일 시
			return new ResponseEntity<User>(userInfo, HttpStatus.OK);
		} catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}

	}
	
	// 2. 유저의 건강력 조회
	/* return:
	 (number)
	 */
	@GetMapping("/{userId}/score")
	public ResponseEntity<?> getUserScore(@PathVariable int userId) {
		// try catch로 비정상적인 접근 시 예외 처리
		try {
			// service 호출
			int userScore = userService.getUserScore(userId);
			
			// 만약 service -> dao -> db 통신에서 실패한다면
			if(userScore == -1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("유저 정보가 존재하지 않습니다.");
			}
			
			// 정상 로직일 시
			return new ResponseEntity<Integer>(userScore, HttpStatus.OK);
		}
		catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}		
		
	}
	
	// 3. 유저가 건강 관리한 연속 일수
	/* return:
	 (number)
	 */
	@GetMapping("/{userId}/streak")
	// TODO TypeMismatchException 처리 
	public ResponseEntity<?> getUserStreak(@PathVariable int userId) {
		try {
			// service 호출
			int userStreak = userService.getUserStreak(userId);
			
			// 만약 service -> dao -> db 통신에서 실패한다면
			if(userStreak == -1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("유저 정보가 존재하지 않습니다.");
			}
			
			// 정상 로직일 시
			return new ResponseEntity<Integer>(userStreak, HttpStatus.OK);
		}
		catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}		
	}
	
	
	// 4. 유저의 등급 조회
	/* return:
	 (number)
	 */
	@GetMapping("/{userId}/tier")
	public ResponseEntity<?> getUserTier(@PathVariable int userId) {
		try {
			// service 호출
			int userTier = userService.getUserTier(userId);			
			
			// 만약 service -> dao -> db 통신에서 실패한다면
			if(userTier == -1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("유저 정보가 존재하지 않습니다.");
			}
			
			// 정상 로직일 시
			return new ResponseEntity<Integer>(userTier, HttpStatus.OK);
		}
		catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}		
	}
		
	// 5. 유저가 획득한 총 카드 수 조회
	/* return:
	 (number)
	 */
	@GetMapping("/{userId}/totalCardCount")
	public ResponseEntity<?> getUserTotalCardCount(@PathVariable int userId) {
		try {
			// service 호출
			int userTotalCardCount = userService.getUserTotalCardCount(userId);
			
			// 만약 service -> dao -> db 통신에서 실패한다면
			if(userTotalCardCount == -1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("유저 정보가 존재하지 않습니다.");
			}
			
			// 정상 로직일 시
			return new ResponseEntity<Integer>(userTotalCardCount, HttpStatus.OK);					
		}
		catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}				
	}
	
	// 6. 유저가 획득한 총 카드 수 업데이트
	/* return:
	 true/false
	 */
	@PutMapping("/{userId}/totalCardCount")
	public ResponseEntity<?> updateTotalCardCount(@PathVariable int userId, @RequestBody User user) {		
		try {
			// service 호출			
			int newTotalCardCount = user.getTotalCardCount();			
			int userTotalCardCount = userService.updateUserTotalCardCount(userId, newTotalCardCount);
			
			if(userTotalCardCount == -1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("유저 정보가 존재하지 않습니다.");				
			}
			
			// 정상 로직일 시 			
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		}
		catch(Exception e) {
			System.out.println("===userController===");
			e.printStackTrace();
			System.out.println("===userController===");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상적인 접근입니다.");
		}
	}
	
	
	// 7. 건강 점수 업데이트
	/* return:
	 true/false
	 */
	@PutMapping("/{userId}/score")
	public ResponseEntity<?> updateUserScore(@PathVariable int userId, @RequestBody User user) {
		try {
			int newUserScore = user.getScore();
			int isScoreUpdated = userService.updateUserScore(userId, newUserScore);
			
			if(isScoreUpdated == -1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("유저 정보가 존재하지 않습니다.");				
			}
			
			// 정상 로직일 시 			
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
