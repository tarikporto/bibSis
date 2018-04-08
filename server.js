var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Usuario = require("./api/models/UsuarioModel"),
  Comentario = require("./api/models/ComentarioModel"),
  Documento = require("./api/models/DocumentoModel"),
  Atividade = require("./api/models/AtividadeModel"),
  Disciplina = require("./api/models/DisciplinaModel"),
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bibSisDB");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

applyRoutes();

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(3000);

console.log("bibSis RESTful API server started on: " + port);

function applyRoutes () {
  var usuarioRoutes = require("./api/routes/UsuarioRoutes"); //importing route
  var comentarioRoutes = require("./api/routes/ComentarioRoutes"); //importing route
  var documentoRoutes = require("./api/routes/DocumentoRoutes"); //importing route
  var atividadeRoutes = require("./api/routes/AtividadeRoutes"); //importing route
  var disciplinaRoutes = require("./api/routes/DisciplinaRoutes"); //importing route
  usuarioRoutes(app); //register the routes
  comentarioRoutes(app); //register the routes
  documentoRoutes(app); //register the routes
  atividadeRoutes(app); //register the routes
  disciplinaRoutes(app); //register the routes
}
