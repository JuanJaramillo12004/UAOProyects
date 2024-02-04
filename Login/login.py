import sys
from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import (QApplication, QLabel, QWidget, QLineEdit, QPushButton, QMessageBox, QCheckBox,)
from PyQt6.QtGui import (QFont, QPixmap)

class Login(QWidget):
    
    def __init__(self):
        super().__init__()
        self.inicializarUI()

    def inicializarUI(self):
        self.setGeometry(100,100,350,250)
        self.setWindowTitle("Login")
        self.generar_formulario()
        self.show()

    def generar_formulario(self):
        self.is_logged = False

        user_label = QLabel(self)
        user_label.setText("Usuario:")
        user_label.setFont(QFont('Arial',10))
        user_label.move(20,54)

        self.user_input = QLineEdit(self)
        self.user_input.resize(250,24)
        self.user_input.move(90,50)

        password_label = QLabel(self)
        password_label.setText("Password:")
        password_label.setFont(QFont('Arial',10))
        password_label.move(20,86)

        self.password_input = QLineEdit(self)
        self.password_input.resize(250,24)
        self.password_input.move(90,82)
        self.password_input.setEchoMode(
            QLineEdit.EchoMode.Password
        )

        self.view_password = QCheckBox(self)
        self.view_password.setText("Ver contraseña")
        self.view_password.move(90,110)
        self.view_password.clicked.connect(self.mostrar_password)

        login_button = QPushButton(self)
        login_button.setText("Login")
        login_button.resize(320,34)
        login_button.move(20,140)
        login_button.clicked.connect(self.iniciar_mainview)

        register_button = QPushButton(self)
        register_button.setText("Registrate")
        register_button.resize(320,34)
        register_button.move(20,180)
        register_button.clicked.connect(self.registrar)
    
    def mostrar_password(self):
        pass

    def iniciar_mainview(self):
        pass
    
    def registrar(self):
        pass

    

if __name__ == '__main__':
    app = QApplication(sys.argv)
    login = Login()
    sys.exit(app.exec())