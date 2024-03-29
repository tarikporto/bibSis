'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
  nomeUsuario: {
    type: String,
    unique: true
  },
  nome: String,
  favoritos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Disciplina"
  }]
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
