package com.ssafit.model.dto;

import java.io.Serializable;

public class User implements Serializable {
	// 객체 직렬화 고유 번호
	private static final long serialVersionUID = 1L;
	
	// 멤버 필드
	private int id;
	private String loginId;
	private String password;
	private String userName;
	private int score;
	private int totalCardCount;
	private int tier;
	
	// 생성자
	public User() {} // 기본 생성자
	// 매개 변수 생성자 
	public User(int id, String loginId, String password, String userName, int score, int totalCardCount, int tier) {
		this.id = id;
		this.loginId = loginId;
		this.password = password;
		this.userName = userName;
		this.score = score;
		this.totalCardCount = totalCardCount;
		this.tier = tier;
	}
	
	// 게터 세터
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLoginId() {
		return loginId;
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public int getTotalCardCount() {
		return totalCardCount;
	}
	public void setTotalCardCount(int totalCardCount) {
		this.totalCardCount = totalCardCount;
	}
	public int getTier() {
		return tier;
	}
	public void setTier(int tier) {
		this.tier = tier;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	// 메소드
	@Override
	public String toString() {
		return "User [id=" + id + ", loginId=" + loginId + ", password=" + password + ", userName=" + userName
				+ ", score=" + score + ", totalCardCount=" + totalCardCount + ", tier=" + tier + "]";
	}	
	
}
