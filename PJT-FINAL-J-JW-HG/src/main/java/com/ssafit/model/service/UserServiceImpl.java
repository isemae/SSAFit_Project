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
	@Override
	public User getUserInfo(int userId) {
		User userInfo = userDao.getUserInfo(userId);
		
		// 조회에 실패하면 null이 반환됨		
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
