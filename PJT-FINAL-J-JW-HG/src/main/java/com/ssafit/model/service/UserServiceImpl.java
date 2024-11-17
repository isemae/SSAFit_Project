package com.ssafit.model.service;

import org.springframework.stereotype.Service;

import com.ssafit.model.dao.UserDao;
import com.ssafit.model.dto.User;

@Service
public class UserServiceImpl implements UserService {
	private final UserDao userDao;
	// 생성자로 의존성 주입
	public UserServiceImpl(UserDao userDao) {
		this.userDao = userDao;
	}

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
			User userInfo = userDao.getUserInfo(userId);
			
			// loginId, password는 db에서 가져오지 않음
			// password는 절대 안되고 loginId는 필요시 가져오기 가능
	
			// 조회에 실패하면 null이 반환됨
			// mapper의 resultType이 Object 이기 때문에 존재하지 않는 유저라도 null 반환할수도 있음.
			if(userInfo == null) {
				System.out.println("Service에서 통신. " + userId + "번 유저정보를 찾을 수 없습니다.");
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
	@Override
	public int getUserScore(int userId) {
		try {
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
	@Override
	public int getUserTier(int userId) {
		
		return 0;
	}
	
	
	// 5. 쥬어가 획득한 총 카드 수 조회
	@Override
	public int getUserTotalCardCount(int userId) {
		return 0;
	}


}
