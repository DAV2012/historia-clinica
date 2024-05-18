package com.soycivera.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	// @Configuration
	
	// public class CorsConfiguration implements WebMvcConfigurer {

	// 	@Override

	// 	public void addCorsMappings(CorsRegistry registry) {
	// 		registry.addMapping("/**")
	// 				.allowedOrigins("http://192.168.10.22:3000")
	// 				.allowedMethods("*")
	// 				.allowedHeaders("*")
	// 				.allowCredentials(true);
	// 	}
	// }

	@Configuration
	public class CorsConfiguration implements WebMvcConfigurer {

		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**")
					.allowedOrigins("http://192.168.1.6:3000","https://dav245.duckdns.org","http://localhost:3000,http://8.219.185.139:3000/")
					.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
		}
}

}
