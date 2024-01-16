package api.dev.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import api.dev.filters.JwtAuthenticationFilter;
import api.dev.service.UserService;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    
    
    private final  UserService userService;

    
    private final  JwtAuthenticationFilter jwtAuthenticationFilter;
     

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
      AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userService.userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/error", "/api/auth/registerNewListener" , "/api/auth/confirm" , "/api/auth/login" , "/api/auth/resendEmail" ).permitAll();
                    auth.anyRequest().authenticated();
            });
            http.authenticationProvider(authenticationProvider()).addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
            http.oauth2Login(oauth -> oauth.defaultSuccessUrl("/home").failureUrl("/error"));
       
            return http.build();              
    }

  
     
}
