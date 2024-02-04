import tkinter as tk 
from tkinter import *
import sys
from PyQt6 import QtCore
from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import (QApplication, QLabel, QWidget, QLineEdit, QPushButton, QMessageBox, QCheckBox,)
from PyQt6.QtGui import (QFont, QPixmap, QIcon)

class Calculator(QWidget):
    def __init__(self):
        super().__init__()
        self.inicializarUI()

    def inicializarUI(self):
        self.setGeometry(100,100,300,270)
        self.setWindowTitle("Calculadora")
        self.setStyleSheet("background: qlineargradient( x1:0 y1:0, x2:1 y2:0, stop:0 green, stop:1 white);}")
        self.setFixedSize(300,270)
        self.setWindowFlags(QtCore.Qt.WindowType.WindowTitleHint)
        self.setWindowIcon(QIcon('.\Calculator\icono.png'));
        self.interfaz()
        self.show()

    def interfaz(self):
        buttonColor = "white"
        self.num1 = QPushButton(self)
        self.num1.setText("1")
        self.num1.setStyleSheet("background-color: "+buttonColor+";")
        self.num1.resize(40,34)
        self.num1.move(20,20)
        self.num1.clicked.connect(self.signal1)
        self.num2 = QPushButton(self)
        self.num2.setText("2")
        self.num2.setStyleSheet("background-color: "+buttonColor+";")
        self.num2.resize(40,34)
        self.num2.move(70,20)
        self.num2.clicked.connect(self.signal2)
        self.num3 = QPushButton(self)
        self.num3.setText("3")
        self.num3.setStyleSheet("background-color: "+buttonColor+";")
        self.num3.resize(40,34)
        self.num3.move(120,20)
        self.num3.clicked.connect(self.signal3)
        self.num4 = QPushButton(self)
        self.num4.setText("4")
        self.num4.setStyleSheet("background-color: "+buttonColor+";")
        self.num4.resize(40,34)
        self.num4.move(20,60)
        self.num4.clicked.connect(self.signal4)
        self.num5 = QPushButton(self)
        self.num5.setText("5")
        self.num5.setStyleSheet("background-color: "+buttonColor+";")
        self.num5.resize(40,34)
        self.num5.move(70,60)
        self.num5.clicked.connect(self.signal5)
        self.num6 = QPushButton(self)
        self.num6.setText("6")
        self.num6.setStyleSheet("background-color: "+buttonColor+";")
        self.num6.resize(40,34)
        self.num6.move(120,60)
        self.num6.clicked.connect(self.signal6)
        self.num7 = QPushButton(self)
        self.num7.setText("7")
        self.num7.setStyleSheet("background-color: "+buttonColor+";")
        self.num7.resize(40,34)
        self.num7.move(20,100)
        self.num7.clicked.connect(self.signal7)
        self.num8 = QPushButton(self)
        self.num8.setText("8")
        self.num8.setStyleSheet("background-color: "+buttonColor+";")
        self.num8.resize(40,34)
        self.num8.move(70,100)
        self.num8.clicked.connect(self.signal8)
        self.num9 = QPushButton(self)
        self.num9.setText("9")
        self.num9.setStyleSheet("background-color: "+buttonColor+";")
        self.num9.resize(40,34)
        self.num9.move(120,100)
        self.num9.clicked.connect(self.signal9)
        self.num0 = QPushButton(self)
        self.num0.setText("0")
        self.num0.setStyleSheet("background-color: "+buttonColor+";")
        self.num0.resize(40,34)
        self.num0.move(70,140)
        self.num0.clicked.connect(self.signal0)
        self.sumar = QPushButton(self)
        self.sumar.setText("+")
        self.sumar.setStyleSheet("background-color: "+buttonColor+";")
        self.sumar.resize(40,34)
        self.sumar.move(20,140)
        self.sumar.clicked.connect(self.mas)
        self.restar = QPushButton(self)
        self.restar.setText("-")
        self.restar.setStyleSheet("background-color: "+buttonColor+";")
        self.restar.resize(40,34)
        self.restar.move(120,140)
        self.restar.clicked.connect(self.menos)
        self.multiplicar = QPushButton(self)
        self.multiplicar.setText("*")
        self.multiplicar.setStyleSheet("background-color: "+buttonColor+";")
        self.multiplicar.resize(40,34)
        self.multiplicar.move(20,180)
        self.multiplicar.clicked.connect(self.asterisco)
        self.dividir = QPushButton(self)
        self.dividir.setText("/")
        self.dividir.setStyleSheet("background-color: "+buttonColor+";")
        self.dividir.resize(40,34)
        self.dividir.move(70,180)
        self.dividir.clicked.connect(self.slash)
        self.igualdad = QPushButton(self)
        self.igualdad.setText("=")
        self.igualdad.setStyleSheet("background-color: "+buttonColor+";")
        self.igualdad.resize(40,34)
        self.igualdad.move(120,180)
        self.igualdad.clicked.connect(self.igual)
        self.puntuar = QPushButton(self)
        self.puntuar.setText(".")
        self.puntuar.setStyleSheet("background-color: "+buttonColor+";")
        self.puntuar.resize(40,34)
        self.puntuar.move(70,220)
        self.puntuar.clicked.connect(self.punto)
        self.resultado = QLineEdit(self)
        self.resultado.resize(100,24)
        self.resultado.move(170,24)
        self.resultado.setEnabled(False)
        self.resultado.setText(" ")
        self.resultado.setStyleSheet("background-color: "+buttonColor+";")

        salir = QPushButton(self)
        salir.setText("Salir")
        salir.resize(100,34)
        salir.move(170,60)
        salir.clicked.connect(self.salida)
        salir.setStyleSheet("background-color: "+buttonColor+";")
        
        limpiar = QPushButton(self)
        limpiar.setText("Limpiar")
        limpiar.resize(100,34)
        limpiar.move(170,100)
        limpiar.clicked.connect(self.limpiar)
        limpiar.setStyleSheet("background-color: "+buttonColor+";")

    def signal0(self):
        texto = (self.resultado.text() + self.num0.text()).strip()
        self.resultado.setText(texto)
        print(texto)
    
    def signal1(self):
        texto = (self.resultado.text() + self.num1.text()).strip()
        self.resultado.setText(texto)
        print(texto)

    def signal2(self):
        texto = (self.resultado.text() + self.num2.text()).strip()
        self.resultado.setText(texto)
        print(texto)
        
    def signal3(self):
        texto = (self.resultado.text() + self.num3.text()).strip()
        self.resultado.setText(texto)
        print(texto)
    
    def signal4(self):
        texto = (self.resultado.text() + self.num4.text()).strip()
        self.resultado.setText(texto)
        print(texto)
        
    def signal5(self):
        texto = (self.resultado.text() + self.num5.text()).strip()
        self.resultado.setText(texto)
        print(texto)
        
    def signal6(self):
        texto = (self.resultado.text() + self.num6.text()).strip()
        self.resultado.setText(texto)
        print(texto)
        
    def signal7(self):
        texto = (self.resultado.text() + self.num7.text()).strip()
        self.resultado.setText(texto)
        print(texto)
    
    def signal8(self):
        texto = (self.resultado.text() + self.num8.text()).strip()
        self.resultado.setText(texto)
        print(texto)
        
    def signal9(self):
        texto = (self.resultado.text() + self.num9.text()).strip()
        self.resultado.setText(texto)
        print(texto)
    
    def mas(self):
        texto = (self.resultado.text() + self.sumar.text()).strip()
        self.resultado.setText(texto)
        print(texto)

    def menos(self):
        texto = (self.resultado.text() + self.restar.text()).strip()
        self.resultado.setText(texto)
        print(texto)
        
    def asterisco(self):
        texto = (self.resultado.text() + self.multiplicar.text()).strip()
        self.resultado.setText(texto)
        print(texto)
        
    def slash(self):
        texto = (self.resultado.text() + self.dividir.text()).strip()
        self.resultado.setText(texto)
        print(texto)
    
    def punto(self):
        texto = (self.resultado.text() + self.puntuar.text()).strip()
        self.resultado.setText(texto)
        print(texto)

    def igual(self):
        textoCompleto = self.resultado.text()
        if('+' in textoCompleto) is True:
            suma = textoCompleto.split("+")
            resultado = str(float(suma[0]) + float(suma[1]))
        elif('-' in textoCompleto) is True:
            resta = textoCompleto.split("-")
            resultado = str(float(resta[0]) - float(resta[1]))
        elif('*' in textoCompleto) is True:
            multiplicacion = textoCompleto.split("*")
            resultado = str(float(multiplicacion[0]) * float(multiplicacion[1]))
        elif('/' in textoCompleto) is True:
            division = textoCompleto.split("/")
            resultado = str(float(division[0]) / float(division[1]))
        else:
            resultado = "No hay operaciones"
        self.resultado.setText(resultado)
        print(resultado)
    
    def salida(self):
        exit()
    
    def limpiar(self):
        self.resultado.setText("")

if __name__ == '__main__':
    app = QApplication(sys.argv)
    calculator = Calculator()
    sys.exit(app.exec())