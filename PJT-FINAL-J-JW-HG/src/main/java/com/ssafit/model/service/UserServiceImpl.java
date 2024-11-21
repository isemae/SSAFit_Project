package com.ssafit.model.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafit.model.dao.UserDao;
import com.ssafit.model.dto.User;
import com.ssafit.util.JwtUtil;

@Service
public class UserServiceImpl implements UserService {
	private final UserDao userDao;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	private final JwtUtil jwtUtil;
	
	// 생성자로 의존성 주입
	public UserServiceImpl(UserDao userDao, BCryptPasswordEncoder bCryptPasswordEncoder, JwtUtil jwtUtil) {
		super();
		this.userDao = userDao;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		this.jwtUtil = jwtUtil;
	}

///////////////////////////////////////////////////////////////////////////////
	// Business Logic 
///////////////////////////////////////////////////////////////////////////////	
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
	@Override
	public User getUserInfo(int userId) {
		try {
			// 정상 로직
			User userInfo = userDao.getUserInfo(userId);
			
			// loginId, password는 db에서 가져오지 않음
			// password는 절대 안되고 loginId는 필요시 가져오기 가능
	
			// 조회에 실패하면 null이 반환됨
			// mapper의 resultType이 Object 이기 때문에 존재하지 않는 유저라도 null 반환할수도 있음.
			if(userInfo == null) {
				System.out.println("Service에서 통신: " + userId + "번 유저정보를 찾을 수 없습니다.");
				return null;
			}
			
			// token에 있는 id로 조회할 경우에는 없어도 갠춘한 로직일지도? token 탈취를 고려한다면 refresh 토큰 검증 필요
			// 본인이 아닌 다른 사람의 정보를 조회할 경우
			if(userInfo.getId() != userId) {
				System.out.println("다른 사람의 정보를 조회하려 합니다.");
				return null;
			}		
			
			return userInfo;
		}
		catch(Exception e) {
			// 기타 예외에 대해서도 null 반환
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			System.out.println("===userServiceImpl===");
			
			return null;
		}
	}


	// 2. 유저의 건강력 조회
	/* return:
	 (int) score
	 */
	@Override
	public int getUserScore(int userId) {
		try {
			// 정상 로직
			int userScore = userDao.getUserScore(userId);
			
			return userScore; 
		}
		catch(Exception e) {
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			System.out.println("===userServiceImpl===");
			
			// -1 반환
			return -1;
		}
	}

	
	// 3. 유저가 건강 관리한 연속 일수
	/* return:
	 (int) streak
	 */
	@Override
	public int getUserStreak(int userId) {
		try {
			int userStreak = userDao.getUserStreak(userId);	
			
			return userStreak;
		}
		catch(Exception e) {
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			System.out.println("===userServiceImpl===");
			
			return -1;
		}				
	}

	
	// 4. 유저의 등급 조회
	/* return:
	 (int) tier
	 */
	@Override
	public int getUserTier(int userId) {
		try {
			// 정상 로직
			int userTier = userDao.getUserTier(userId);
			
			return userTier;
		}
		catch(Exception e) {
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			System.out.println("===userServiceImpl===");
			
			return -1;
		}		
	}
		
	// 5. 유저가 획득한 총 카드 수 조회
	/* return:
	 (int) totalCardCount
	 */
	@Override
	public int getUserTotalCardCount(int userId) {
		try {
			// 정상 로직
			int userTotalCardCount = userDao.getUserTotalCardCount(userId);
			
			return userTotalCardCount;					
		}
		catch(Exception e) {
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			System.out.println("===userServiceImpl===");
			
			return -1;
		}		
	}

	// 6. 유저가 획득한 총 카드 수 업데이트
	@Override
	public int updateUserTotalCardCount(int userId, int newTotalCardCount) {
		try {
			int isTotalCardCountUpdated = userDao.updateUserTotalCardCount(userId, newTotalCardCount);
			
			// update가 성공한 column 개수를 반환 -> 정상 로직 동작시 1, 비정상시 0 반환
			if(isTotalCardCountUpdated == 0) {
				System.out.println("Service에서의 통신: 해당 유저를 찾을 수 없습니다.");
				return -1;
			}
			
			return isTotalCardCountUpdated;
		}
		catch(Exception e) {
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			System.out.println("===userServiceImpl===");
			
			return -1;
		}		
	}

	// 7. 건강 점수 업데이트
	@Override
	public int updateUserScore(int userId, int newUserScore) {
		try {
			int isScoreUpdated = userDao.updateUserScore(userId, newUserScore);
			
			// update가 성공한 column 개수를 반환 -> 정상 로직 동작시 1, 비정상시 0 반환
			if(isScoreUpdated == 0) {
				System.out.println("Service에서의 통신: 해당 유저를 찾을 수 없습니다.");
				return -1;
			}
			
			return isScoreUpdated;
		}
		catch(Exception e) {
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			System.out.println("===userServiceImpl===");
			
			return -1;			
		}		
	}
	
	// ========================= Account ================================= //
	// 8. 로그인 시도에 따른 특정 유저의 비밀번호 조회
	@Override
	public String getInfoForLoginTry(String loginId, String password) {
		try {
			// service에서 비즈니스 로직 처리
			// user id를 토대로 db에서 그 id에 해당하는 유저 조회
			User dbUser = userDao.getInfoForLoginTry(loginId);
			
			// 해당하는 유저가 없을 시
			if(dbUser == null) {
				System.out.println("Service에서의 통신: 해당 유저를 찾을 수 없습니다.");
				return null;
			}
			
			String dbPassword = dbUser.getPassword();			
				
			// 비밀번호가 일치하지 않는다면
			if(!bCryptPasswordEncoder.matches(password, dbPassword)) {
				System.out.println("Service에서의 통신: 비밀번호가 일치하지 않습니다.");
				return null;
			}
			
			// password 뺴고 등록
			String accessToken = jwtUtil.createAccessToken(dbUser);
			
			return accessToken;
		}
		catch(Exception e) {
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			System.out.println("===userServiceImpl===");
			
			return null;	
		}
	}

	
	// 9. 회원가입 시도
	@Override
	public int tryRegist(User user) {
		try {
			// service에서 비즈니스 로직 처리
			// front에서도 공백 체크 해주겠지만... back에서도 한 번 더 체크
			if(user.getLoginId() == "") {
				System.out.println("user의 loginId가 존재하지 않습니다.");
				return -1;
			}
			else if(user.getPassword() == "") {
				System.out.println("user의 password가 존재하지 않습니다.");
				return -1;
			}
			else if(user.getUserName() == "") {
				System.out.println("user의 userName이 존재하지 않습니다.");
				return -1;
			}
			
			// - 비밀번호 암호화
			String newUserPassword = user.getPassword();
			String bCryptedPassword = bCryptPasswordEncoder.encode(newUserPassword);
			
			user.setPassword(bCryptedPassword);
			
			// dao 호출 및 db 통신 시도
			int isUserRegisted = userDao.tryRegist(user);
			
			// 등록 실패 시
			if(isUserRegisted == 0) {
				System.out.println("Service에서의 통신: 유저 등록에 실패했습니다.");
				return -1;
			}
			
			return isUserRegisted;
		}
		catch(Exception e) {
			System.out.println("===userServiceImpl===");
			e.printStackTrace();
			// TODO 4 사용자 Exception 설정으로 예외 다각화 처리
			// 1. 아이디 중복 예외
			if(e.getMessage().contains("Duplicate")) {
				// 아이디만 unique임
				System.out.println("이미 사용중인 아이디입니다.");
			}
			
			// 2. 정보 없음 예외(cannot be null)
			
			System.out.println("===userServiceImpl===");
			
			return -1;				
		}
	}
}
 