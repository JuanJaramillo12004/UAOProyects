# Practica acerca de Libros - Dataset key/value

class Books:

    def __init__(self) -> None:
        self.books = []

    def loadDataFromCSV(self, file):
        with open(file) as f:
            for line in f:
                line = line.strip()
                values = line.split(sep=';')
                record = {"artists":values[0], "title":values[1], "year":values[2], "numPages":values[3]}
                self.books.append(record)
                print(f"{record['artists']};{record['title']};{record['year']};{record['numPages']}")

    def filterBooks(this, key, value):
        filteredBook = list(filter( lambda x: x[key] == value, this.books ))
        print(filteredBook)

    def filterBooks2(this, key, value):
        filteredBooks = [ f for f in this.books if f[key] == value ]
        print(filteredBooks)