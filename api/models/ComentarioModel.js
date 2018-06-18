'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ComentarioSchema = new Schema({
  titulo: String,
  texto: String,
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  },
  data: {
    type: Date,
    default: Date.now
  },
  avaliacao: Number
});

module.exports = mongoose.model("Comentario", ComentarioSchema);
