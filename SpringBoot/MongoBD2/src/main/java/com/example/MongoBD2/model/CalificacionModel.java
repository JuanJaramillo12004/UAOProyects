package com.example.MongoBD2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Calificaciones")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class CalificacionModel {
    @Id
    private Integer id_calificacion;
    private Integer id_curso;
    private Integer calificacion;
}
