package api.dev.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class UpgradToArtistDto {
     
    private Integer userId;
    private String aki;
}
