from CRUD_PlayList import *

file = input("Ingrese el nombre del archivo: ")

MiPlayList = Playlist()
MiPlayList.loadDataFromCSV(file)