package com.ssafit.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ssafit.interceptor.JwtInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	//-----------------------------------------------------------//
	// 멤버 필드
	//-----------------------------------------------------------//
	private final JwtInterceptor jwtInterceptor;
	
	// 생성자로 의존성 주입
	public WebConfig(JwtInterceptor jwtInterceptor) {
		super();
		this.jwtInterceptor = jwtInterceptor;
	}
	//-----------------------------------------------------------//
	// 로직 부분
	//-----------------------------------------------------------//
	/** interceptor 등록
	 */
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(jwtInterceptor)
				.addPathPatterns("/cards/**", "exercise/**" , "/user/**")
				.excludePathPatterns("/auth/**"); // accounts는 토큰 갖고 있을 필요 없으니 제외

	}
	
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173", "http://localhost:5174")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
