package com.soycivera.api.infra.security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class SecurityConfigurations {
    // @Bean
	// CorsConfigurationSource corsConfigurationSource() {
	// 	CorsConfiguration configuration = new CorsConfiguration();
	// 	configuration.setAllowedOrigins(Arrays.asList("http://192.168.10.22:3000"));
	// 	configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE"));
	// 	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	// 	source.registerCorsConfiguration("/**", configuration);
	// 	return source;
	// }
    
    @Autowired
    private SecurityFilter securityFilter;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .cors()
                .and()
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests((authorize) -> authorize
                    .requestMatchers( "api/login")
                    .permitAll()
                    .anyRequest()
                    .authenticated()
                )
       
                
            
                ;
                
        return httpSecurity.build();
    }
                // .cors()
                // .and()
                // .csrf().disable().sessionManagement()
                // .sessionCreationPolicy(SessionCreationPolicy.STATELESS) ///le indicamos a Sprint el tipo de dato
                // .and().authorizeHttpRequests()
                // .requestMatchers(HttpMethod.POST,"api/login")
                // .permitAll()
                // .anyRequest()
                // .authenticated()
                // .and()
                // .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                // .build();
    // }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return  authenticationConfiguration.getAuthenticationManager();
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    // @Bean
    // CorsConfigurationSource corsConfigurationSource() {
    //     CorsConfiguration configuration = new CorsConfiguration();
    //     configuration.setAllowedOrigins(Arrays.asList("http://192.168.10.22:3000"));
    //     configuration.setAllowedMethods(Arrays.asList("GET", "POST","PUT","DELETE"));
    //     configuration.setAllowedHeaders(Arrays.asList("*"));
    //     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //     source.registerCorsConfiguration("/**", configuration);
    //     return source;
    // }

}
