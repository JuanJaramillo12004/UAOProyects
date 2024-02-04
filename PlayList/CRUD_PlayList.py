# Practica acerca de una PlayList - Dataset key/value

class Playlist:

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