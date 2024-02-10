from CRUD_PlayList import *

file = input("Ingrese el nombre del archivo: ")
filtro = input("Ingrese el artista que quiere filtrar: ")

MiPlayList = Playlist()
MiPlayList.loadDataFromCSV(file)
MiPlayList.filterPlaylist("artist",filtro) 
MiPlayList.filterPlaylist2("artist",filtro)