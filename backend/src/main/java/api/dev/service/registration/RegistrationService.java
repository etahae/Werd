package api.dev.service.registration;

import java.time.LocalDateTime;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import api.dev.dto.RegisterDto;
import api.dev.entity.Roles;
import api.dev.entity.Token;
import api.dev.entity.User;
import api.dev.repository.TokenRepository;
import api.dev.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service  
@RequiredArgsConstructor
public class RegistrationService {
    
    
    private final  UserRepository repository;
    
    
    private final  PasswordEncoder encoder;

    
    private final  TokenRepository tokenRepository;

    
    private final EmailSerive emailSerive;

    private String saveToken(User user)
    {
        Random random = new Random();

        // Generate 6 random numbers
        Integer randomNumber = 100000 + random.nextInt(900000); // Change 100 to the desired upper bound


        Token newToken = new Token(randomNumber.toString(), LocalDateTime.now(), LocalDateTime.now().plusMinutes(15) , user);

        tokenRepository.save(newToken);
        return randomNumber.toString();
    }

    // TODO: resend email verification decan97242@pursip.com

    public ResponseEntity<String>  registerNewListener(RegisterDto dto)
    {
        // if (repository.findByUsername(dto.getUsername()).isPresent()) {
        //     return ResponseEntity.badRequest().body("username aleredy exists");
        // }
        
         
        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("email aleredy exists");
        }
        
        if (!dto.getPassword().equals(dto.getConfirmPassword())) {
            return ResponseEntity.badRequest().body("confirmied password not matched");
        }

        User newArtist = new User(dto.getFirastName() , dto.getFirastName() , dto.getEmail() ,encoder.encode( dto.getPassword()) , Roles.ROLE_LISTENER); 
        
        repository.save(newArtist);

        // TODO : genrate and store token in db
        
        String token = saveToken(newArtist);

        emailSerive.send( dto.getEmail(), token);
 
        return ResponseEntity.status(201).body(token);
    }

    public ResponseEntity<String> confirmEmail(String token)
    {
        Token tokenInfos = tokenRepository.findByToken(token).orElse(null);

        if (tokenInfos == null) 
        {
            return ResponseEntity.badRequest().body("token not valid");
        }

        if (tokenInfos.getConfirmedAt() != null) {
            return ResponseEntity.badRequest().body("token aleredy confirmed");
        }

        LocalDateTime expiredAt = tokenInfos.getExpiresAt(); // date will be expired

        if (expiredAt.isBefore(LocalDateTime.now())) {
            return ResponseEntity.badRequest().body("token expired");
        }

        tokenRepository.updateConfirmedAt(token, LocalDateTime.now());

        repository.enableAppUser(tokenInfos.getUser().getEmail());

        return ResponseEntity.status(200).body("email confirmed"); // what is tatus code of email confirmed
    }


    public ResponseEntity<String> ressendEmailVerification(String email)
    {
        User user = repository.findByEmail(email).orElse(null);
        if (user == null) {
            return ResponseEntity.badRequest().body("email not exists");
        }

        String token = saveToken(user);
 
        emailSerive.send( email, token);
        return ResponseEntity.status(200).body(token);
    }
  
}
