# Practica acerca de una PlayList - Dataset key/value

class Playlist:

    numQueries = 0

    def __init__(self) -> None:
        self.playlist = []

    def loadDataFromCSV(self, file):
        with open(file) as f:
            for line in f:
                line = line.strip()
                values = line.split(sep=';')
                record = {"artist":values[0], "song":values[1], "genre":values[2], "time":values[3]}
                self.playlist.append(record)
            
        print(self.playlist)

    def filterPlaylist(this, key, value):
        filteredList = list(filter( lambda x: x[key] == value, this.playlist ))
        print(filteredList)

    def filterPlaylist2(this, key, value):
        filteredPlaylist = [ f for f in this.playlist if f[key] == value ]
        print(filteredPlaylist)