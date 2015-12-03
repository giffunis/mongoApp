## Tutorial de MongoDB.

### 1. Introducción.

[Despliegue en Heroku](https://tutorial-alu0100770551.herokuapp.com/)

### 2. Instalación.

MongoDB se encuentra disponible para Windows, Linux y Mac.

* [Instalación para Mac.](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
* [Instalación para Ubuntu.](https://docs.mongodb.org/manual/administration/install-on-linux/)
* [Instalación para Windows.](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)

### 3. Comandos básicos

Para iniciar MongoDB en Linux:

	sudo service mongod start

Para detener la MongoDB:

	sudo service mongod stop

Reiniciar la MongoDB:

	sudo service mongod restart

El puerto por defecto en el que arranca es, 27017. El puerto es configurado en la ruta `/etc/mongod.conf`.

![/etc/mongod.conf](imagenesMarkdown/mongod.conf.png)
