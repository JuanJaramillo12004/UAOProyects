package com.example.MongoBD2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Usuarios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioModel {
    @Id
    private Integer id_usuario;
    private String nombre;
    private String carrera;
    private Integer semestre;
}
