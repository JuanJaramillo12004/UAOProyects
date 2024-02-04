def principal():
    otro = "S"
    while(otro == "S"):
        age = int(input("Digite su edad: "))
        if(age < 18):
            print("Eres un menor de edad")
        else:
            print("Eres mayor de edad")
        otro = input("Desea validar otra edad? \nS=SI ó N=NO: ").upper()
    print("Programa finalizado!!")

principal()   