package api.dev.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * Token
 */

@Getter
@Setter
@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String token;

    private LocalDateTime createdAt;

    private LocalDateTime expiresAt;

    private LocalDateTime confirmedAt;
    
    @ManyToOne
    @JoinColumn(
        name = "user_id"
    )
    private User user;
 
    public Token(){}

    public Token(String token, LocalDateTime createdAt, LocalDateTime expiresAt , User user) {
        this.token = token;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        this.user = user;
    }

    @Override
    public String toString() {
        return "Token [id=" + id + ", token=" + token + ", createdAt=" + createdAt + ", expiresAt=" + expiresAt
                + ", confirmedAt=" + confirmedAt + "]";
    }


    
}