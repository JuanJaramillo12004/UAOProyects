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

# Funciones del CRUD
def Create(collection, data):
    doc_id, doc_rev = db.save(data)

def Update(doc_id, data):
    doc = db[doc_id]
    doc.update(data)
    db.save(doc)

def SelectAll(collection):
    docs = [doc for doc in db.view(f"{collection}/all")]
    
def Select_By_Criteria(collection,criteria):
    docs = [doc for doc in db.view(f"{collection}/by_criteria",key=criteria)]

def Delete_Id(doc_id):
    doc = db[doc_id]
    db.delete(doc)
    
def Delete_Value(key, value):
    doc_id = db.get()

guitarra = {
    "id":"G001",
    "nombre":"Guitarra acústica básico",
    "categoria":"Música",
    "descripcion":"guitarra acústica básica",
    "duracion":40,
    "precio":0.0,
    "remoto":False
}

pintura1 = {
    "id":"P001",
    "nombre":"Pintura al óleo",
    "categoria":"Arte",
    "descripcion":"Pintura al óleo",
    "duracion":30,
    "precio":0.0,
    "remoto":False
}

pintura2 = {
    "id":"P002",
    "nombre":"Pintura acrílico",
    "categoria":"Arte",
    "descripcion":"Pintura acrílico",
    "duracion":30,
    "precio":0.0,
    "remoto":False
}

Create("cursos", guitarra)
Create("cursos", pintura1)
Create("cursos", pintura2)

#REVISAR UPDATE
guitarra["duracion"] = 45
Update(guitarra)

lista_cursos = SelectAll("cursos")
for c in lista_cursos:
    print(c)
    
criterios = "Arte"
cursos_pintura = Select_By_Criteria("cursos", criterios)


"""# Crear curso
new_course = {
    "id":"",
    "nombre":"",
    "descripcion":"",
    "categoria":""
}

# Crear tutor
new_tutor = {
    "doc":"",
    "nombre":"",
    "ocupacion":"",
    "tel_contacto":""
}

# Crear aprendiz
new_apprentice = {
    "id":"",
    "nombre":"",
    "tel_contacto":""
}


cursos
-id
-nombre
-descripcion
-categoria  artes
            ciencias basicas
            tecnologia

tutores
-doc
-nombre
-ocupacion
-tel_contacto
-calificacion

aprendices
-id
-nombre
-telefono"""