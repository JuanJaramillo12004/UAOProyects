import random
#hola
longitud = int(input("Longitud de la palabra: "))
caracteres = "abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
palabra = ""
otro = "S"
while(otro == "S"):
    for i in range(longitud):
        palabra = palabra + random.choice(longitud)
        print(palabra)
    otro = input("Desea generar otra palabra? \nS=SI ó N=NO: ").upper()