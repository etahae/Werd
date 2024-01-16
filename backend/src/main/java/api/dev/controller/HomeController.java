package api.dev.controller;

import java.security.Principal;

import org.apache.catalina.authenticator.SpnegoAuthenticator.AuthenticateAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticatedPrincipal;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import api.dev.entity.Roles;
import api.dev.entity.User;
import api.dev.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class HomeController {
    
     
    private final UserRepository userRepository;

    @GetMapping("/home")
    public String getMessage(Authentication principal) {
          
        OAuth2User oauth2User = (OAuth2User) principal.getPrincipal();

        String email = oauth2User.getAttribute("email");
        String name = oauth2User.getAttribute("name");
        
         if (!userRepository.findByEmail(email).isPresent()) 
        {
            User user = new User(name, email, Roles.ROLE_LISTENER );
             
            userRepository.save(user); 
        }

        return "login succussfuly";
    }   
     
}
