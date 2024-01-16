package api.dev.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterDto {

    private String lastName;
    private String firstName;
    private String username;
    private String email;
    private String password;
    private String confirmPassword; 
}
