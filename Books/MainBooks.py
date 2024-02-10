from CRUD_Books import *

file = r'.\Books\Data.csv'
MiBook = Books()
MiBook.loadDataFromCSV(file)

opcion = int(input("Cómo quiere filtrar? \n1=Lambda ó 2=List Comprehension: "))



if(opcion == 1):
    
    dato = int(input("""Dato por el que desea filtrar 
1. Artistas 
2. Titulo
3. Año

Digite 1,2 ó 3: """))
    
    if(dato == 1):
        filtro = input(f"Ingrese el artista que quiere filtrar: ")
        MiBook.filterBooks("artists",filtro)
        
    elif(dato == 2):
        filtro = input(f"Ingrese el titulo que quiere filtrar: ")
        MiBook.filterBooks("title",filtro)
        
    else:
        filtro = input(f"Ingrese el año que quiere filtrar: ")
        MiBook.filterBooks("year",filtro)
        
elif(opcion == 2):
    
    dato = int(input("""Dato por el que desea filtrar 
1. Artistas 
2. Titulo
3. Año

Digite 1,2 ó 3: """))
    
    if(dato == 1):
        filtro = input(f"Ingrese el artista que quiere filtrar: ")
        MiBook.filterBooks2("artists",filtro)
        
    elif(dato == 2):
        filtro = input(f"Ingrese el titulo que quiere filtrar: ")
        MiBook.filterBooks2("title",filtro)
        
    else:
        filtro = input(f"Ingrese el año que quiere filtrar: ")
        MiBook.filterBooks2("year",filtro)
        
else:
    print("Opción incorrecta")




