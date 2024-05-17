package com.soycivera.api.infra.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.soycivera.api.domain.usuarios.Usuario;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
   @Value("${api.security.secret}")
   private String apiSecret;

   public String generarToken(Usuario usuario) {
      try {
         Algorithm algorithm = Algorithm.HMAC256(this.apiSecret);
         return JWT.create().withIssuer("civera").withSubject(usuario.getLogin()).withClaim("id", usuario.getId()).withExpiresAt(this.generarFechaExpiracion()).sign(algorithm);
      } catch (JWTCreationException var3) {
         throw new RuntimeException();
      }
   }

   public String getSubject(String token) {
      if (token == null) {
         throw new RuntimeException();
      } else {
         DecodedJWT verifier = null;

         try {
            Algorithm algorithm = Algorithm.HMAC256(this.apiSecret);
            verifier = JWT.require(algorithm).withIssuer("civera").build().verify(token);
            verifier.getSubject();
         } catch (JWTVerificationException var4) {
         }

         if (verifier.getSubject() == null) {
            throw new RuntimeException("verifier invalido");
         } else {
            return verifier.getSubject();
         }
      }
   }

   private Instant generarFechaExpiracion() {
      return LocalDateTime.now().plusHours(15L).toInstant(ZoneOffset.of("-05:00"));
   }
}
