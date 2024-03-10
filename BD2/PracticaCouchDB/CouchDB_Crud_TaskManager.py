import couchdb

conn_string = "http://JuanJaramillo:JuanEduardo12004@localhost:5984"
server = couchdb.Server(conn_string)

db_name = "taskmanager"

if db_name in server:
    print("Conectado con la BD")
    db = server[db_name]
else:
    print("---Creando base de datos")
    db = server.create(db_name)
    
#**** Crud ****    
#read: select all
for doc_id in db:
    print (db [doc_id])
    
#select por id
id_doc = input("Ingrese la id del documento: ")
doc= db[id_doc]
print (doc)

#select por llave y valor determinados: 

#crear nuevo documento:
new_developer = {
    "id":"12345678",
    "Nombre":"Juan"
}

#al crear nuevo documento se recibe el _id y el rev dado por couchdb:
doc_new_dev_id, doc_new_dev_rev = db.save(new_developer)