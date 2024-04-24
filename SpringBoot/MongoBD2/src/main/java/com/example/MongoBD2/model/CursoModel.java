package com.example.MongoBD2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Cursos")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class CursoModel {
    @Id
    private Integer id;
}
