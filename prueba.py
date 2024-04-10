# Definición de datos

asignaturas_disponibles = {
    "MAT101": {"nombre": "Matemáticas I", "creditos": 4},
    "FIS101": {"nombre": "Física I", "creditos": 4},
    "CS101": {"nombre": "Introducción a la Computación", "creditos": 3},
    "ENG101": {"nombre": "Inglés I", "creditos": 2},
    "HIS101": {"nombre": "Historia Universal", "creditos": 3}
}

codigos_administradores = {"admin1": "admin123", "admin2": "admin456"}
codigos_estudiantes = {"estudiante1": {"contraseña": "pass123", "asignaturas": [], "creditos": 0},
                       "estudiante2": {"contraseña": "pass456", "asignaturas": [], "creditos": 0},
                       "estudiante3": {"contraseña": "pass789", "asignaturas": [], "creditos": 0}}

# Función para verificar credenciales de administrador
def login_administrador(codigo, contraseña):
    return codigo in codigos_administradores and codigos_administradores[codigo] == contraseña

# Función para verificar credenciales de estudiante
def login_estudiante(codigo, contraseña):
    return codigo in codigos_estudiantes and codigos_estudiantes[codigo]["contraseña"] == contraseña

# Función para que un estudiante adicione una asignatura
def adicionar_asignatura(codigo_estudiante, codigo_asignatura):
    estudiante = codigos_estudiantes[codigo_estudiante]
    if codigo_asignatura in asignaturas_disponibles and codigo_asignatura not in estudiante["asignaturas"]:
        asignatura = asignaturas_disponibles[codigo_asignatura]
        if estudiante["creditos"] + asignatura["creditos"] <= 10:
            estudiante["asignaturas"].append(codigo_asignatura)
            estudiante["creditos"] += asignatura["creditos"]
            print("Asignatura añadida exitosamente.")
        else:
            print("No se puede añadir la asignatura. Se excede el límite de créditos.")

# Función para que un estudiante cancele una asignatura
def cancelar_asignatura(codigo_estudiante, codigo_asignatura):
    estudiante = codigos_estudiantes[codigo_estudiante]
    if codigo_asignatura in estudiante["asignaturas"]:
        asignatura = asignaturas_disponibles[codigo_asignatura]
        if estudiante["creditos"] - asignatura["creditos"] >= 4:
            estudiante["asignaturas"].remove(codigo_asignatura)
            estudiante["creditos"] -= asignatura["creditos"]
            print("Asignatura cancelada exitosamente.")
        else:
            print("No se puede cancelar la asignatura. Se baja del límite mínimo de créditos.")

# Función para mostrar resumen de asignaturas y créditos de un estudiante
def mostrar_resumen(codigo_estudiante):
    estudiante = codigos_estudiantes[codigo_estudiante]
    print("Asignaturas matriculadas:")
    for asignatura_codigo in estudiante["asignaturas"]:
        asignatura = asignaturas_disponibles[asignatura_codigo]
        print(f"- {asignatura['nombre']} ({asignatura_codigo})")
    print(f"Total de créditos: {estudiante['creditos']}")

# Función principal para ejecutar el programa
# Función para que un administrador adicione una nueva asignatura
def agregar_nueva_asignatura(codigo_asignatura, nombre_asignatura, creditos_asignatura):
    if codigo_asignatura not in asignaturas_disponibles:
        asignaturas_disponibles[codigo_asignatura] = {"nombre": nombre_asignatura, "creditos": creditos_asignatura}
        print("Nueva asignatura añadida exitosamente.")
    else:
        print("El código de asignatura ya existe. No se puede añadir.")

# Función principal para ejecutar el programa
def main():
    while True:
        print("\nBienvenido al sistema de la Escuelita de Doña Rita")
        tipo_usuario = input("¿Eres administrador (A) o estudiante (E)? ").upper()
        
        if tipo_usuario == "A":
            codigo_admin = input("Ingrese su código de administrador: ")
            contraseña_admin = input("Ingrese su contraseña: ")
            if login_administrador(codigo_admin, contraseña_admin):
                print("Bienvenido administrador.")
                codigo_operacion = input("¿Desea adicionar (A) o cancelar (C) asignaturas? ").upper()
                if codigo_operacion == "A":
                    codigo_asignatura = input("Ingrese el código de la nueva asignatura: ")
                    nombre_asignatura = input("Ingrese el nombre de la nueva asignatura: ")
                    creditos_asignatura = int(input("Ingrese el número de créditos de la nueva asignatura: "))
                    agregar_nueva_asignatura(codigo_asignatura, nombre_asignatura, creditos_asignatura)
                elif codigo_operacion == "C":
                    codigo_asignatura = input("Ingrese el código de la asignatura que desea cancelar: ")
                    cancelar_asignatura(codigo_asignatura)
            else:
                print("Credenciales incorrectas. Inténtelo de nuevo.")
        
        elif tipo_usuario == "E":
            codigo_estudiante = input("Ingrese su código de estudiante: ")
            contraseña_estudiante = input("Ingrese su contraseña: ")
            if login_estudiante(codigo_estudiante, contraseña_estudiante):
                print("Bienvenido estudiante.")
                codigo_operacion = input("¿Desea adicionar (A) o cancelar (C) asignaturas? ").upper()
                if codigo_operacion == "A":
                    codigo_asignatura = input("Ingrese el código de la asignatura que desea adicionar: ")
                    adicionar_asignatura(codigo_estudiante, codigo_asignatura)
                elif codigo_operacion == "C":
                    codigo_asignatura = input("Ingrese el código de la asignatura que desea cancelar: ")
                    cancelar_asignatura(codigo_estudiante, codigo_asignatura)
                mostrar_resumen(codigo_estudiante)
            else:
                print("Credenciales incorrectas. Inténtelo de nuevo.")

# Ejecución del programa
main()