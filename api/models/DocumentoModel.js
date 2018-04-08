'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DocumentoSchema = new Schema({
  titulo: String,
  tipo: String,
  usuarioFonte: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  },
  comentarios: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comentario"
  }],
  avaliacao: Number
});

module.exports = mongoose.model("Documento", DocumentoSchema);
