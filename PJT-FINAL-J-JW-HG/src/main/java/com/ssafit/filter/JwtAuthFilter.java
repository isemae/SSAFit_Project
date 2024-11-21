//package com.ssafit.filter;
//
//import java.io.IOException;
//
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.ssafit.util.JwtUtil;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//// OncPerRequestFilter: 한 request에 대해 단 한 번의 실행을 보장함
//@Component
//public class JwtAuthFilter extends OncePerRequestFilter {
//	private final UserDetailsService userDetailsService;
//	private final JwtUtil jwtUtil;
//
//	// 생성자로 의존성 주입
//	public JwtAuthFilter(UserDetailsService userDetailsService, JwtUtil jwtUtil) {
//		super();
//		this.userDetailsService = userDetailsService;
//		this.jwtUtil = jwtUtil;
//	}
//	
//
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		// 1. header 가져오기
//		final String authorizationHeader = request.getHeader("Authorization");
//		
//		String token = null;
//		
//		// 2. JWT가 header에 있는 경우
//		// Bearer 접두어를 통해 토큰 기반 인증이라는 것을 명시
//		if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
//			token = authorizationHeader.substring(7); // 접두어를 제외한 나머지 String이 토큰임
//			
//			// 토큰 유효성 검증
//			if(jwtUtil.verifyToken(token)) {
//				int userId = jwtUtil.getUserId(token);
//				
//				// 유효한 토큰 -> userDetails 생성
//				UserDetails userDetails = userDetailsService.loadUserByUsername(Integer.toString(userId));
//				UserDetails userDetails2 = userDetailsService.loadUserByUsername(jwtUtil.getUserName(token));
//				
//				System.out.println("1 => " + userDetails);
//				System.out.println("2 => " + userDetails2);
//				
//				// 생성에 성공했으면
//				if(userDetails != null) {
//					// 접근권한 인증 token 생성: Spring-Security 내부에서 인가에 사용됨
//					UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = 
//							new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//					
//					// 현재 request의 security context에 접근 권한 설정 해주기(token 추가)
//					SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//				}
//			}
//			
//			// filterChain의 다음 필터로 넘기기
//			filterChain.doFilter(request, response);
//		}
//		
//	}
//
//
//
//	
//}
