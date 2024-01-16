package api.dev.dto;

import lombok.Getter;

@Getter
public class UpdatePassword {
    
    private String currentPassword;

    private String newPassword;
}
