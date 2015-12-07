## MongoDB y NodeJS.


### 1. Introducción.

Conectar nuestra base de datos de MongoDB con una aplicación cualquiera implementada con Node es,
bastante sencillo gracias a *[Mongoose](http://mongoosejs.com/)*

### 2. Instalación de Mongoose.

Introducir en la consola:

	npm install mongoose --save

Esta línea nos instalará mongoose en nuestra aplicación y actualizará el package.json.

Ahora, en el app.js, debemos añadir:

	var mongoose = require('mongoose');

### 3. Creación de un modelo de usuario.

Para prácticar, crearemos un Modelo de usuario, el cual es el siguiente:


	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var userSchema = new Schema({
	  username: String,
	  password: String,
	  email: {type: String, required: true, index:{unique:true}}
	});

	// we need to create a model using it
	var User = mongoose.model('User', userSchema);

	// make this available to our users in our Node applications
	module.exports = User;

### 4. Función del controlador para ver los usuarios registrados.

	// Creación de la Conexión
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/registros');

	// Creación de variables para cargar el modelo
	User = require('../models/usuarios');


	exports.listaUsuarios = function (req, res) {
	  User.find(function(err, users) {
	    if (err) throw err;
	    return res.render('pages/usuarios', { title: 'Resultados', usuarios: users });
	  });
	};

### 5. Router y Vista de los usuarios registrados.
Route:

	var express = require('express');
	var usuariosRoute = express.Router();
	var usuariosController = require('../controllers/usuarios_controller');

	/* GET tutorial page. */
	usuariosRoute.get('/', usuariosController.listaUsuarios);

	module.exports = usuariosRoute;

En app.js:

	var usuariosRoute = require('./routes/usuarios');
	app.use('/usuarios', usuariosRoute);


`pages/usuarios`:

	<div class="row">
		<h2><%- title %></h2>
	</div>

	<div class="row">
		<% if(usuarios.length != null){ %>
			<table class="table table-bordered">
				<tr>
					<td><strong>Username</strong></td>
					<td><strong>Password</strong></td>
					<td><strong>Email</strong></td>
					<td><strong>Link</strong></td>
				</tr>
				<%for(var i = 0; i < usuarios.length; i++){ %>
					<tr>
						<td> <%= usuarios[i].username %> </td>
						<td> <%= usuarios[i].password %></td>
						<td> <%= usuarios[i].email %></td>
						<td><a href= <%='/usuarios/'+ usuarios[i].username%> >Link.</a></td>
					</tr>
				<% } %>
			</table>
		<% } %>
	</div>

### 6. Función del controlador para ver un sólo usuario.
Route:

	usuariosRoute.post('/:id', usuariosController.usuario);

Controlador:

	exports.usuario = function(req,res){
	  User.findOne({username:req.params.id},function(err, user) {
	    if (err) throw err;
	    return res.render('pages/usuario', { usuario: user});
	  });
	};

### 7. ¿Como sería para actualizar un usuario?



	User.findBy({username:req.params.id},function(err, user) {
		if (err) res.send(err);

	 			// update the users info only if its new
	 			if (req.body.username) user.username = req.body.username;
	 			if (req.body.password) user.password = req.body.password;
	 			if (req.body.email) user.email = req.body.email;

	 			// save the user
	 			user.save(function(err) {
	 				if (err) res.send(err);

	 				// return a message
	 				res.json({ message: 'Usuario actualizado' });
	 			});

	 		});
	 	})”

### 8. Más información:

* [Model.update](http://mongoosejs.com/docs/2.7.x/docs/updating-documents.html)
* [Libro: Mean Machine](https://leanpub.com/mean-machine)
* [Easily Develop Node.js and MongoDB Apps with Mongoose ](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)
