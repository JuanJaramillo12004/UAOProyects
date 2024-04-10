import couchdb

# Conexión a couchDB
conn_string = "http://JuanJaramillo:JuanEduardo12004@localhost:5984"
server = couchdb.Server(conn_string)
db_name = "recommendation_system"

if db_name in server:
    print("Conectado con la BD")
    db = server[db_name]
else:
    print("---Creando base de datos")
    db = server.create(db_name)
    
#Operaciones del crud:

def validarGuardado(doc_id):
    if doc_id in db:
        print(f'El documento con id {doc_id} Se ha guardado correctamente')
    else:
        print(f'Error al guardar {doc_id}')

def consultarTutorNombre(nombre):
    for row in db.view('_all_docs', include_docs = True):
        doc = row['doc']
        if doc.get('nombre') == nombre:
            return doc
    return None

def consultarUsuarioNombre(nombre):
    for row in db.view('_all_docs', include_docs = True):
        doc = row['doc']
        if doc.get('nombre') == nombre:
            return doc
    return None

def consultarCursoNombre(nombre):
    for row in db.view('_all_docs', include_docs = True):
        doc = row['doc']
        if doc.get('nombre') == nombre:
            return doc
    return None

def menu():
    while True:
        opcion = int(input('''---------------------------------------
Seleccione la opcion que desea
1. Creación
2. Consulta por nombre
3. Salir
Ingrese: '''))

        if opcion == 1:
            subOpcion = int(input('''---¿Qué tipo de rol desea crear?---
1. Aprendiz
2. Tutor
3. Curso
Ingrese: '''))
            
            if subOpcion == 1:
                id = input("Ingrese el ID del aprendiz: ")
                nombre = input("Ingrese el nombre del aprendiz: ")
                carrera = input("Ingrese la carrera del aprendiz: ")
                semestre = int(input("Ingrese el semestre cursado del aprendiz: "))
                pass
            
            elif subOpcion == 2:
                id = input("Ingrese el ID del tutor: ")
                nombre = input("Ingrese el nombre del tutor: ")
                carrera = input("Ingrese la carrera del tutor: ")
                semestre = int(input("Ingrese el semestre cursado del tutor: "))
                calPromedio = float(input("Ingrese el semestre cursado del tutor: "))
                pass

            elif subOpcion == 3:
                id = input("Ingrese el ID del curso: ")
                nombre = input("Ingrese el nombre del curso: ")
                categoria = input("Ingrese la categoria del curso: ")
                modalidad = input("Ingrese la modalidad del curso: ")
                gratuito = input("¿El curso es gratuito?: ")
                precio = float(input("Ingrese el precio del curso: "))
                duracion = int(input("Ingrese la duración del curso: "))
                certificado = input("¿El curso tiene certificado?: ")
                calPromedio = float(input("Ingrese el nombre del curso: "))
                pass
            else:
                print("Opción Inválida. Proporcione una opción correcta.")
        
        elif opcion == 2:
            opc1 = int(input('''---CONSULTA POR NOMBRE---
1. Consultar usuario
2. Consultar tutor
3. Consultar curso
4. Regresar
Ingrese: '''))
            
            if opc1 == 1:
                consultarUsuarioNombre(input('Ingresa el nombre del usuario: '))
                pass
            elif opc1 == 2:
                consultarTutorNombre(input('Ingresa el nombre del tutor: '))
                pass
            elif opc1 == 3:
                consultarCursoNombre(input('Ingresa el nombre del curso: '))
                pass
            elif opc1 == 4:
                continue  # Volver al menú principal
            else:
                print("Opción Inválida. Proporcione una opción correcta.")
        
        elif opcion == 3:
            print("Salir")
            break  # Salir del bucle while y finalizar el programa
        
        else:
            print("Opción Inválida. Proporcione una opción correcta.")

menu()