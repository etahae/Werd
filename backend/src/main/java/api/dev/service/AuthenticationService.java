package api.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import api.dev.dto.LoginDto;
import api.dev.dto.RegisterDto;
import api.dev.dto.UpgradToArtistDto;
import api.dev.entity.Roles;
import api.dev.entity.User;
import api.dev.repository.UserRepository;
import api.dev.service.registration.RegistrationService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    
    private final  UserRepository repository;

    
    private final  PasswordEncoder encoder;

    
    private final  AuthenticationManager authManager;

    
    private final  UserService userService;

    
    private final  JwtService jwtService;

    public ResponseEntity<String> upgradeToArtist(UpgradToArtistDto dto)  
    {
        User artist = repository.findById(dto.getUserId()).orElse(null); // if null pass null to artist obj

        if (artist == null) // protection
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new String("user not found")); 
        }

        artist.setAuthorities(Roles.ROLE_ARTIST);
        artist.setAki(dto.getAki());
        repository.save(artist);

        return ResponseEntity.status(HttpStatus.OK).body("upgraded to artist");
    }


    public ResponseEntity<String> login(LoginDto dto){
        
        String token ;
        Authentication auth = null;

        try {
            
            auth = authManager.authenticate(new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword()));
             
            SecurityContextHolder.getContext().setAuthentication(auth);
            
            User user = repository.findByUsername(dto.getUsername()).orElse(null);
             
            if (user == null) {
                token = jwtService.generateToken(repository.findByEmail(dto.getUsername()).get());
            }
            else
                token = jwtService.generateToken(user);

            return ResponseEntity.status(HttpStatus.OK).body(token);

        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new String("bad credentials")); 
        }
    }

    public ResponseEntity<?> updatePassword(String currentPassword , String newPassword , String username){

        /*
         * The loadUserByUsername method returns a UserDetails object, but you're 
         * explicitly casting it to a User type. If User implements UserDetails, 
         * this cast allows you to access the methods or properties specific to the 
         * User class that are not available in the UserDetails interface.
            . In this scenario, it might be considered more as a type conversion rather
             than typical downcasting.
         */
        
        User user = (User) userService.userDetailsService().loadUserByUsername(username);
        
        if(!encoder.matches(currentPassword, user.getPassword()))
        {
            return ResponseEntity.status(403).body("incorrect current password");
        }

        user.setPassword(encoder.encode(newPassword));
        repository.save(user);
        return ResponseEntity.status(HttpStatus.OK).body("password updated");
    }


}
