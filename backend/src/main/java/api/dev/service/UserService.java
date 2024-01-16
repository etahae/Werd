package api.dev.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import api.dev.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;

  // An instance of an anonymous inner class refers to an object created from a class that doesn't have a name and is defined within the scope of another class or method.
    // this way can pass UserService class to  authProvider.setUserDetailsService(userService.userDetailsService());
    // the normal way dont work 

    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) {
                
                UserDetails user = userRepository.findByUsername(username).orElse(null);
                if (user == null) 
                {
                    user = userRepository.findByEmail(username).orElse(null);  
                    if (user == null) 
                    {
                        throw new UsernameNotFoundException("user not found");    
                    }
                }                
                return user;
            }
        };
    } 
    
    
       
}
