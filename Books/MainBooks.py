from CRUD_Books import *

file = r'.\Books\Data.csv'
MiBook = Books()
MiBook.loadDataFromCSV(file)

opcion = int(input("Cómo quiere filtrar? \n1=Lambda ó 2=List Comprehension: "))

if(opcion == 1):
    dato = int(input("Dato por el que desea filtrar \n1. Artistas ó title ó year: "))
    filtro = input(f"Ingrese el {dato} que quiere filtrar: ")
    MiBook.filterBooks(dato,filtro) 
elif(opcion == 2):
    dato = input("Dato por el que desea filtrar \nartists ó title ó year: ").lower()
    filtro = input(f"Ingrese el {dato} que quiere filtrar: ")
    MiBook.filterBooks2(dato,filtro)
else:
    print("Opción incorrecta")




