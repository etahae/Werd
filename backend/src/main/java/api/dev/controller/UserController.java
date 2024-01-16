package api.dev.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.dev.dto.ConfirmDto;
import api.dev.dto.LoginDto;
import api.dev.dto.RegisterDto;
import api.dev.dto.ResendEmail;
import api.dev.dto.UpdatePassword;
import api.dev.dto.UpgradToArtistDto;
import api.dev.service.AuthenticationService;
import api.dev.service.registration.RegistrationService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api/auth")
@RestController
@RequiredArgsConstructor
public class UserController {

    
    private final  AuthenticationService authService;
    
    private final  RegistrationService registrationService;

    @PostMapping("/upgradeToArtist")
    public ResponseEntity<String> upgradeToArtist(@RequestBody UpgradToArtistDto dto){
        return authService.upgradeToArtist(dto);
    }
      
    @PostMapping("/registerNewListener")
    public ResponseEntity<String> registerNewListener(@RequestBody RegisterDto dto) throws MessagingException{
        return registrationService.registerNewListener(dto);
    }

    @PostMapping("/confirm")
    public ResponseEntity<String> confirmEmail(@RequestBody ConfirmDto dto){

        return registrationService.confirmEmail(dto.getToken());
    }

    @PostMapping("/resendEmail")
    public ResponseEntity<String> ressendEmailVerification(@RequestBody ResendEmail dto)
    {
        return registrationService.ressendEmailVerification(dto.getEmail());
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto dto){
        return authService.login(dto);
    }

    
    @PatchMapping("/updatepassword")
    public  ResponseEntity<?>  updatePassword(@RequestBody UpdatePassword dto , Principal  client){
        return authService.updatePassword(dto.getCurrentPassword(), dto.getNewPassword() , client.getName());
    } 

}
 