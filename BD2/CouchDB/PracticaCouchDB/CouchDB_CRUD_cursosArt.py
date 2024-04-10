import couchdb
#conexión a la BD:

user = "JuanJaramillo"
pwd = "JuanEduardo12004"
host = "127.0.0.1"
port = "5984"

#couch_server  = couchdb.Server("http://admin:admin@127.0.0.1:5984/")
couch_server = couchdb.Server(f"http://{user}:{pwd}@{host}:{port}/")

db_name = "recommendation_system"

#selección o creación de un store existente:
if (db_name in couch_server):
    print("Conectado con la BD")
    db = couch_server[db_name]
else:
    print("---Creando base de datos")
    db = couch_server.create(db_name)

#Operaciones del crud:

def validarGuardado(doc_id):
    
    try:
        doc = db[doc_id]
        print(f'El documento con id {doc_id} se ha guardado correctamente.')
    except couchdb.http.ResourceNotFound:
        print(f'Error al guardar. ')
        

def consultarTutorNombre(nombre):
    for row in db.view('_design/tutor', include_docs = True):
        doc = row['doc']
        if doc.get('nombre') == nombre:
            return doc
    return print(f'No se encontró la entrada {nombre}')

def consultarAprendizNombre(nombre):
    for row in db.view('_design/aprendiz', include_docs = True):
        doc = row['doc']
        if doc.get('nombre') == nombre:
            return doc
    return print(f'No se encontró la entrada {nombre}')

def consultarCursoNombre(nombre):
    for row in db.view('_design/curso', include_docs = True):
        doc = row['doc']
        if doc.get('nombre') == nombre:
            return doc
    return print(f'No se encontró la entrada {nombre}')

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
                aprendiz = {
                    "tipo":"Aprendiz",
                    "id":id,
                    "nombre":nombre,
                    "carrera":carrera,
                    "semestre":semestre
                }
                db.save(aprendiz)
                validarGuardado(aprendiz["_id"])
                pass
            
            elif subOpcion == 2:
                id = input("Ingrese el ID del tutor: ")
                nombre = input("Ingrese el nombre del tutor: ")
                carrera = input("Ingrese la carrera del tutor: ")
                semestre = int(input("Ingrese el semestre cursado del tutor: "))
                calPromedio = float(input("Ingrese la calificacion promedio del tutor: "))

                tutor = {
                    "tipo":"Tutor",
                    "id":id,
                    "nombre":nombre,
                    "carrera":carrera,
                    "semestre":semestre,
                    "calPromedio":calPromedio
                }
                db.save(tutor)
                validarGuardado(tutor["_id"])
                pass
                

            elif subOpcion == 3:
                id = input("Ingrese el ID del curso: ")
                nombre = input("Ingrese el nombre del curso: ")
                categoria = input("Ingrese la categoria del curso: ")
                modalidad = input("Ingrese la modalidad del curso: ")
                gratuito = True if input("¿El curso es gratuito? (V/F)\n Ingrese una opcion: ").upper() == "V" else False
                precio = float(input("Ingrese el precio del curso: "))
                duracion = int(input("Ingrese la duración del curso: "))
                certificado = True if input("¿El curso tiene certificado? (V/F)\n Ingrese una opcion: ").upper() ==  "V" else False
                calPromedio = float(input("Ingrese la calificacion promedio del curso: "))
                curso = {
                    "tipo":"Curso",
                    "id":id,
                    "nombre":nombre,
                    "categoria":categoria,
                    "modalidad":modalidad,
                    "gratuito":gratuito,
                    "precio":precio,
                    "duracion":duracion,  
                    "certificado":certificado,
                    "calPromedio":calPromedio
                }
                db.save(curso)
                validarGuardado(curso["_id"])
                pass
            else:
                print("Opción Inválida. Proporcione una opción correcta.")
        
        elif opcion == 2:
            opc1 = int(input('''---CONSULTA POR NOMBRE---
1. Consultar aprendiz
2. Consultar tutor
3. Consultar curso
4. Regresar
Ingrese: '''))
            
            if opc1 == 1:
                documento = consultarAprendizNombre(input('Ingresa el nombre del aprendiz: '))
                print(documento)
                pass
            elif opc1 == 2:
                documento = consultarTutorNombre(input('Ingresa el nombre del tutor: '))
                print(documento)
                pass
            elif opc1 == 3:
                documento = consultarCursoNombre(input('Ingresa el nombre del curso: '))
                print(documento)
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

# def Select_By_Criteria(collection,criteria):
#     docs = [doc for doc in db.view(f"{collection}/by_criteria",key=criteria)]
# criterios = "Arte"
# cursos_pintura = Select_By_Criteria("cursos", criterios)

# (1) Insert: creación de un documento #Crear aprendiz, tutor, curso
"""aprendiz = {
    "id":"1244324",
    "nombre":"Nicolas Gonzalez",
    "carrera":"Ing. Informatica",
    "semestre":5,
}

aprendiz2 = {
    "id":"1244335",
    "nombre":"Juan Jaramillo",
    "carrera":"Ing. Informatica",
    "semestre":5,
}  

tutor1 = {
    "id":"231332",
    "nombre":"Hernando Umaña",
    "carrera":"Ing. Informatica",
    "semestre":4,
    "calPromedio":4
}

tutor2 = {
    "id":"222222",
    "nombre":"Sandra Guañarita",
    "carrera":"Ing. de Sistemas",
    "semestre":5,
    "calPromedio":3.5
}

curso1 = {
    "id":"231332",
    "nombre":"Bases de Datos 1",
    "categoria":"Ingenieria",
    "modalidad":"Presencialidad",
    "gratuito":False,
    "precio":1800000,
    "duracion":40,  
    "certificado":True,
    "calPromedio":4
}

curso2 = {
    "id":"123456",
    "nombre":"Ing. software",
    "categoria":"Ingenieria",
    "modalidad":"Diurna",
    "gratuito":False,
    "precio":1800000,
    "duracion":40,  
    "certificado":True,
    "calPromedio":3.9
}

db.save(aprendiz1)
db.save(aprendiz2)
db.save(tutor1)
db.save(tutor2)
db.save(curso1)
db.save(curso2)






# validarGuardado(aprendiz1["id"])
# validarGuardado(tutor1["id"])





# (2)  Select: selección de un documento por un determinado valor de llave ("_id")
#doc_creado = db["1244324"]
#print(doc_creado)
#  Otra forma de ejecutar queries usando el lenguaje "mango" de consultas de CouchDB (notación JSON)
#  referencia de queries más complejos en:
#  https://docs.couchdb.org/en/stable/api/database/find.html
query = {"selector":{"rep_legal": "Diana L"}}
docs = db.find(query)
result = [] 

# docs es un objeto iterable:
for i in docs:
  print(dict(i)) #i es un documento de couchdb que puede convertirse a diccionario...
  result.append(dict(i)) #...y adicionarse a una lista

# (3) Update: Modificación de un documento previamente consultado:
#doc_creado["fondos"] = 1000000.0
# db.save(doc_creado)
# print(doc_creado)

# (4) Delete:Borrado de un documento existente
doc_borrar = db["2"]
db.delete(doc_borrar)


conn_string = "http://admin:admin123*@localhost:5984"
server = couchdb.Server(conn_string)

db_name = "cursos_Artisticos"

if db_name in server:
    print("Conectado con la BD")
    db = server[db_name]
else:
    print("---Creando base de datos")
    db = server.create(db_name)

#funciones del crud
def Create(collection, data):
    doc_id, doc_rev = db.save(data)

def Update(doc_id, data):
    doc = db[doc_id]
    doc.update(data)
    db.save(doc)
    
def SelectAll(collection): #el selectall selecciona todos los registros
    docs = [doc for doc in db.view(f"{collection}/all")]
    
def Select_By_Criteria(collection, criteria):
    docs = [doc for doc in db.view(f"{collection}/by_criteria", key=criteria)]

def Delete_Id(doc_id):
    doc = db[doc_id]
    db.delete(doc)

def Delete_Value(key, value):
    doc_id = db.get()
    
guitarra = {
    "id":"G001",
    "nombre":"Guitarra acustica base",
    "categoria":"musica",
    "descripcion":"Curso guitarra acustica basico",
    "duracion":40,
    "precio":120000.00,
    "remoto":False
}

pintura1 = {
    "id":"P001",
    "nombre":"Pintura al oleo",
    "categoria":"arte",
    "descripcion":"Pintura en oleo",
    "duracion":30,
    "precio":130000.00,
    "remoto":False
}

pintura2 = {
    "id":"P002",
    "nombre":"Pintura acrilica",
    "categoria":"arte",
    "descripcion":"Pintura acrilica",
    "duracion":30,
    "precio":130000.00,
    "remoto":False
}

Create ("cursos", guitarra)
Create ("cursos", pintura1)
Create ("cursos", pintura2)

#revisar update
guitarra ["duracion"]=45
Update (guitarra)

lista_cursos = SelectAll("cursos")
for c in lista_cursos:
    print(c)
    

criterios = "arte"
cursos_pintura = Select_By_Criteria("cursos", criterios)
"""