package api.dev.service.registration;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

@Service
@RequiredArgsConstructor
public class EmailSerive {
    
    @Value("${spring.mail.username}")
    private String fromEmail;

    @Autowired
    private  JavaMailSender javaMailSender;
    
    @Async
    public void send(String to, String token) {
       
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();

            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setFrom(fromEmail);
            mimeMessageHelper.setTo(to);
            mimeMessageHelper.setSubject("email verification");
            mimeMessageHelper.setText("Welcome back! Enter this code within the next 15 minutes to log in:\n" + token);

             
            javaMailSender.send(mimeMessage);
 

        } catch (Exception e) {
            System.out.println("DDDDDDDDDD");
            throw new RuntimeException(e);
        }
         
    }
}
