'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AtividadeSchema = new Schema({
  nome: String,
  tipo: {
    type: String,
    enum: ["Curso Online", "Trabalho Voluntário", "Disciplina", "Projeto de Extensão"]
  },
  comentarios: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comentario"
  }],
  documentos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Documento"
  }],
  cargaHoraria: Number,
  horarios: [{
    inicio: Date,
    fim: Date
  }],
  blocos: [{
    type: String,
    enum: ["Humanidades - Bloco 1", "Humanidades - Bloco 2",
    "Humanidades - Bloco 3", "Humanidades - Bloco 4", "Economia e Gestão",
    "Atividade Complementar"]
  }],
  dificuldade: Number,
  avaliacao: Number,
  link: String
});

module.exports = mongoose.model("Atividade", AtividadeSchema);
