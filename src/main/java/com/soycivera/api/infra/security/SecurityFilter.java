package com.soycivera.api.infra.security;

import com.soycivera.api.domain.usuarios.UsuarioRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
/////////////////////
//https://www.browserling.com/tools/bcrypt
//Generar clave encryptada
////////////////////
import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        

        var authHeader = request.getHeader("Authorization");
        
        if (authHeader != null){
            var token= authHeader.replace("Bearer ", "");
            System.out.println(token);

            var nombreUsuario = tokenService.getSubject(token);
            System.out.println(nombreUsuario + " nombre usuario");
            
            if (nombreUsuario != null){
                //token valido
                System.out.println("Buscando usuario con nombre de usuario: " + nombreUsuario);

                    var usuario = usuarioRepository.findByLogin(nombreUsuario);
                    if (usuario != null) {
                        // El usuario se encontró en la base de datos, puedes acceder a sus propiedades
                        System.out.println(usuario + " esto es un usuario");
                    
                        var authentication = new UsernamePasswordAuthenticationToken(usuario, null,
                                usuario.getAuthorities());
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    } else {
                        // El usuario no se encontró en la base de datos, realiza alguna acción de manejo de error
                        System.out.println("Usuario no encontrado en la base de datos.");
                    }
                    
            }
        }
        filterChain.doFilter(request,response);

    }
}
