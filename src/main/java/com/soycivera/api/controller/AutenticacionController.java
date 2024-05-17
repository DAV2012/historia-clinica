package com.soycivera.api.controller;

import com.soycivera.api.domain.usuarios.DatosAutenticaionUsuario;
import com.soycivera.api.domain.usuarios.Usuario;
import com.soycivera.api.infra.security.DatosJWTToken;
import com.soycivera.api.infra.security.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
// @CrossOrigin(origins = "http://191.91.236.121:3000")

@RequestMapping("api/login")
public class AutenticacionController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;
    @PostMapping
    public ResponseEntity autenticarUsuario(@RequestBody @Valid DatosAutenticaionUsuario datosAutenticaionUsuario){
        Authentication authToken = new UsernamePasswordAuthenticationToken(datosAutenticaionUsuario.login(), datosAutenticaionUsuario.clave());
        System.out.println(authToken + "controlador");
        var usuarioAutenticado = authenticationManager.authenticate(authToken);
        var JWTtoken = tokenService.generarToken((Usuario) usuarioAutenticado.getPrincipal());
         System.out.println(JWTtoken);
        return ResponseEntity.ok(new DatosJWTToken(JWTtoken));
    }
}
