'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DisciplinaSchema = new Schema({
  codigo: {
    type: String,
    unique: true
  },
  nome: String,
  tipo: {
    type: String,
    enum: ["Obrigatória", "Optativa", "Eletiva"],
    default: "Obrigatória"
  },
  semestre: Number,
  comentarios: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comentario"
  }],
  professores: [String],
  documentos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Documento"
  }],
  cargaHoraria: Number,
  horarios: [{
    inicio: Date,
    fim: Date
  }],
  dificuldade: Number,
  avaliacao: Number
});

module.exports = mongoose.model("Disciplina", DisciplinaSchema);
