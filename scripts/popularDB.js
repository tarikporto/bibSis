var express = require("express"),
  app = express(),
  port = 3001,
  mongoose = require("mongoose"),
  Usuario = require("../api/models/UsuarioModel"),
  Comentario = require("../api/models/ComentarioModel"),
  Disciplina = require("../api/models/DisciplinaModel"),
  Atividade = require("../api/models/AtividadeModel"),
  Documento = require("../api/models/DocumentoModel"),
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bibSisDB");


// adiciona os usuários no DB
var tarik = new Usuario({
  nomeUsuario: "tarikporto",
  nome: "Tarik Porto"
});

var andre = new Usuario({
  nomeUsuario: "andrelopes",
  nome: "André Lopes"
});

var carlos = new Usuario({
  nomeUsuario: "carlosjoviano",
  nome: "Carlos Joviano"
});

var silvana = new Usuario({
  nomeUsuario: "silvanaribeiro",
  nome: "Silvana Ribeiro"
});

var sd = new Usuario({
  nomeUsuario: "sdcarlosramos",
  nome: "Carlos Ramos"
});

var pedro = new Usuario({
  nomeUsuario: "pedrovinicius",
  nome: "Pedro Vinicius"
});


// salva no DB
tarik.save();
andre.save();
carlos.save();
silvana.save();
pedro.save();
sd.save();

var coment1 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mesmo.",
  avaliacao: 4,
  usuario_id: andre._id
});

var coment2 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mesmo.",
  avaliacao: 3,
  usuario_id: carlos._id
});

var coment3 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mesmo.",
  avaliacao: 4,
  usuario_id: tarik._id
});

var coment4 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mesmo.",
  avaliacao: 2,
  usuario_id: silvana._id
});

var coment5 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mesmo.",
  avaliacao: 4,
  usuario_id: pedro._id
});

var coment6 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mesmo.",
  avaliacao: 3,
  usuario_id: tarik._id
});

var coment7 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mesmo.",
  avaliacao: 5,
  usuario_id: sd._id
});

coment1.save();
coment2.save();
coment3.save();
coment4.save();
coment5.save();
coment6.save();
coment7.save();

var documento1 = new Documento({
  titulo: "Documento 1",
  tipo: "Link",
  usuarioFonte: tarik._id,
  comentarios: [coment3._id],
  avaliacao: 5
});

var documento2 = new Documento({
  titulo: "Documento 2",
  tipo: "Link",
  usuarioFonte: sd._id,
  comentarios: [coment4._id],
  avaliacao: 4
});

var documento3 = new Documento({
  titulo: "Documento 3",
  tipo: "Link",
  usuarioFonte: pedro._id,
  comentarios: [coment5._id],
  avaliacao: 5
});

var documento4 = new Documento({
  titulo: "Documento 4",
  tipo: "Link",
  usuarioFonte: carlos._id,
  comentarios: [],
  avaliacao: 4
});

var documento5 = new Documento({
  titulo: "Documento 5",
  tipo: "Link",
  usuarioFonte: silvana._id,
  comentarios: [],
  avaliacao: 5
});

documento1.save();
documento2.save();
documento3.save();
documento4.save();
documento5.save();

var disciplina1 = new Disciplina({
  codigo: "ELE084",
  nome: "Laboratório de Projeto III",
  semestre: 7,
  comentarios: [coment1._id, coment2._id],
  professores: ["Bruno Adorno"],
  cargaHoraria: 60,
  dificuldade: 4,
  avaliacao: 4,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento1._id, documento2._id]
});

var disciplina2 = new Disciplina({
  codigo: "ELE083",
  nome: "Computação Evolucionária",
  semestre: 7,
  comentarios: [coment6._id],
  professores: ["Ricardo"],
  cargaHoraria: 30,
  dificuldade: 2,
  avaliacao: 4,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento3._id, documento4._id]
});

disciplina1.save();
disciplina2.save();

var atividade1 = new Atividade({
  nome: "Era Vargas",
  tipo: "Curso Online",
  comentarios: [coment7._id],
  cargaHoraria: 30,
  dificuldade: 4,
  avaliacao: 4,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  blocos: ["Humanidades - Bloco 1"],
  documentos: [],
  link: "http://www5.fgv.br/fgvonline/"
});

var atividade2 = new Atividade({
  nome: "SELEX",
  tipo: "Projeto de Extensão",
  comentarios: [],
  cargaHoraria: 45,
  dificuldade: 1,
  avaliacao: 4,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  blocos: ["Humanidades - Bloco 4"],
  documentos: [documento5._id]
});

atividade1.save();
atividade2.save();

console.log("DB populada");
