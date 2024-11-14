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
		User userInfo = userDao.getUserInfo(userId);
		
		// loginId, password는 db에서 가져오지 않음
		// password는 절대 안되고 loginId는 필요시 가져오기 가능

		// 조회에 실패하면 null이 반환됨
		if(userInfo == null) {
			System.out.println("Service에서 통신. " + userId + "번 유저정보를 찾을 수 없습니다.");
			return null;
		}
		
		// 본인이 아닌 다른 사람의 정보를 조회할 경우
		if(userInfo.getId() != userId) {
			System.out.println("다른 사람의 정보를 조회하려 합니다.");
			return null;
		}		

		return userInfo;
	}

	// 2. 유저의 건강력 조회
	@Override
	public int getUserScore(int userId) {
		// TODO Auto-generated method stub
		return 0;
	}

	
	// 3. 유저가 건강 관리한 연속 일수
	@Override
	public int getUserStreak(int userId) {
		// TODO Auto-generated method stub
		return 0;
	}

	
	// 4. 유저의 등급 조회
	@Override
	public int getUserTier(int userId) {
		// TODO Auto-generated method stub
		return 0;
	}
	
	
	// 5. 쥬어가 획득한 총 카드 수 조회
	@Override
	public int getUserTotalCardCount(int userId) {
		// TODO Auto-generated method stub
		return 0;
	}


}
