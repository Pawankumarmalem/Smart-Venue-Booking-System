package smartvenue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import smartvenue.dto.LoginRequest;
import smartvenue.dto.LoginResponse;
import smartvenue.entity.User;
import smartvenue.security.JwtService;
import smartvenue.service.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        User user = userService.loginUser(
                request.getEmail(),
                request.getPassword()
        );

        if (user == null) {
            throw new RuntimeException("Invalid Email or Password");
        }

        // Generate JWT Token
        String token = jwtService.generateToken(user.getEmail());

        // Return Login Response
        return new LoginResponse(
                user.getId(),
                token,
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }
}