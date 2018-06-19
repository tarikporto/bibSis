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

var arthursilva = new Usuario({
  nomeUsuario: "arthursilva",
  nome: "Arthur Silva"
});

var robertojunior = new Usuario({
  nomeUsuario: "robertojunior",
  nome: "Roberto Junior"
});

var guilhermesilva = new Usuario({
  nomeUsuario: "guilhermesilva",
  nome: "Guilherme Silva"
});

var brunomodesto = new Usuario({
  nomeUsuario: "brunomodesto",
  nome: "Bruno Modesto"
});

var raissaresende = new Usuario({
  nomeUsuario: "raissaresende",
  nome: "Raissa Resende"
});

var diogooliveira = new Usuario({
  nomeUsuario: "diogooliveira",
  nome: "Diogo Oliveira"
});

var thulliozanetti = new Usuario({
  nomeUsuario: "thulliozanetti",
  nome: "Thullio Zanetti"
});

var williampereira = new Usuario({
  nomeUsuario: "williampereira",
  nome: "William Pereira"
});

var pedroprates = new Usuario({
  nomeUsuario: "pedroprates",
  nome: "Pedro Henrique Prates"
});

var rafaelcanuto = new Usuario({
  nomeUsuario: "rafaelcanuto",
  nome: "Rafael Canuto"
});

var matheuspalhares = new Usuario({
  nomeUsuario: "matheuspalhares",
  nome: "Matheus Palhares"
});

var matheussilva = new Usuario({
  nomeUsuario: "matheussilva",
  nome: "Matheus Silva"
});

var paulocirino = new Usuario({
  nomeUsuario: "paulocirino",
  nome: "Paulo Cirino"
});

var pedrovenancio = new Usuario({
  nomeUsuario: "pedrovenancio",
  nome: "Pedro Vinicius Venancio"
});

var fabiofreitas = new Usuario({
  nomeUsuario: "fabiofreitas",
  nome: "Fabio Luiz Freitas"
});

var jandirneto = new Usuario({
  nomeUsuario: "jandirneto",
  nome: "Jandir Neto"
});

var alanjunior = new Usuario({
  nomeUsuario: "alanjunior",
  nome: "Alan Junior"
});

var elsonsilva = new Usuario({
  nomeUsuario: "elsonsilva",
  nome: "Elson Jose Silva"
});

var bernardocoutinho = new Usuario({
  nomeUsuario: "bernardocoutinho",
  nome: "Bernardo Coutinho"
});

// salva no DB
tarik.save();
andre.save();
carlos.save();
silvana.save();
pedro.save();
sd.save();
arthursilva.save();
robertojunior.save();
guilhermesilva.save();
brunomodesto.save();
raissaresende.save();
diogooliveira.save();
thulliozanetti.save();
williampereira.save();
pedroprates.save();
rafaelcanuto.save();
matheuspalhares.save();
matheussilva.save();
paulocirino.save();
pedrovenancio.save();
fabiofreitas.save();
jandirneto.save();
alanjunior.save();
elsonsilva.save();
bernardocoutinho.save();

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

var coment8 = new Comentario({
  titulo: "Péssimo",
  texto: "Aulas ruins.",
  avaliacao: 1,
  usuario_id: arthursilva._id
});

var coment9 = new Comentario({
  titulo: "Razoável",
  texto: "Nada demais.",
  avaliacao: 3,
  usuario_id: robertojunior._id
});

var coment10 = new Comentario({
  titulo: "bom",
  texto: "Bom mas podia ser melhor",
  avaliacao: 4,
  usuario_id: guilhermesilva._id
});

var coment11 = new Comentario({
  titulo: "Excelente!",
  texto: "Melhor aula!",
  avaliacao: 5,
  usuario_id: brunomodesto._id
});

var coment12 = new Comentario({
  titulo: "Fraco",
  texto: "Pior aula que já tive",
  avaliacao: 1,
  usuario_id: raissaresende._id
});

var coment13 = new Comentario({
  titulo: "Ruim",
  texto: "Aula ruim.",
  avaliacao: 2,
  usuario_id: diogooliveira._id
});

var coment14 = new Comentario({
  titulo: "Razoável",
  texto: "Legalzinha mas nada demais.",
  avaliacao: 3,
  usuario_id: thulliozanetti._id
});

var coment15 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mas avaliações ruins.",
  avaliacao: 4,
  usuario_id: williampereira._id
});

var coment16 = new Comentario({
  titulo: "Ótimo",
  texto: "Tudo muito bom mesmo.",
  avaliacao: 5,
  usuario_id: pedroprates._id
});

var coment17 = new Comentario({
  titulo: "mHorrorozo",
  texto: "Não tenho nem o que falar.",
  avaliacao: 1,
  usuario_id: rafaelcanuto._id
});

var coment18 = new Comentario({
  titulo: "Ruimzinho",
  texto: "Aulas cansativas.",
  avaliacao: 2,
  usuario_id: matheuspalhares._id
});

var coment19 = new Comentario({
  titulo: "Médio",
  texto: "Nada a reclamar mas nada a elogiar.",
  avaliacao: 3,
  usuario_id: matheussilva._id
});

var coment20 = new Comentario({
  titulo: "Melhor que o esperado",
  texto: "Aulas boas mas o livro podia ser melhor.",
  avaliacao: 4,
  usuario_id: paulocirino._id
});

var coment21 = new Comentario({
  titulo: "Lindo!",
  texto: "Aulas incríveis.",
  avaliacao: 5,
  usuario_id: pedrovenancio._id
});

var coment22 = new Comentario({
  titulo: "Muuuiitoooo ruim",
  texto: "Tudo péssimo.",
  avaliacao: 1,
  usuario_id: fabiofreitas._id
});

var coment23 = new Comentario({
  titulo: "Decepção",
  texto: "Processo avaliativo péssimo.",
  avaliacao: 2,
  usuario_id: jandirneto._id
});

var coment24 = new Comentario({
  titulo: "bom",
  texto: "Faz o feijão com arroz.",
  avaliacao: 3,
  usuario_id: alanjunior._id
});

var coment25 = new Comentario({
  titulo: "muito bom",
  texto: "Ótimas aulas.",
  avaliacao: 4,
  usuario_id: elsonsilva._id
});

var coment26 = new Comentario({
  titulo: "Excelente",
  texto: "muito bom mesmo.",
  avaliacao: 5,
  usuario_id: bernardocoutinho._id
});

var coment27 = new Comentario({
  titulo: "muito ruim",
  texto: "Aulas ruins livro ruim e avaliações ruins.",
  avaliacao: 1,
  usuario_id: sd._id
});
var coment28 = new Comentario({
  titulo: "Fraco",
  texto: "Não aprendi nada.",
  avaliacao: 2,
  usuario_id: andre._id
});

var coment29 = new Comentario({
  titulo: "Normal",
  texto: "não compromete.",
  avaliacao: 3,
  usuario_id: carlos._id
});

var coment30 = new Comentario({
  titulo: "Bom!",
  texto: "muito bom mesmo mas aulas muito longas.",
  avaliacao: 4,
  usuario_id: silvana._id
});

var coment31 = new Comentario({
  titulo: "Legend!",
  texto: "Mudou minha vida.",
  avaliacao: 5,
  usuario_id: tarik._id
});

var coment32 = new Comentario({
  titulo: "Horrorozo",
  texto: "Pena não ter a opção de nota zero.",
  avaliacao: 1,
  usuario_id: matheussilva._id
});

var coment33 = new Comentario({
  titulo: "Ruim",
  texto: "Não cumpre o cronograma.",
  avaliacao: 2,
  usuario_id: rafaelcanuto._id
});

var coment34 = new Comentario({
  titulo: "Normal",
  texto: "Faz o combinado mas não impressiona.",
  avaliacao: 3,
  usuario_id: paulocirino._id
});

var coment35 = new Comentario({
  titulo: "muito bom",
  texto: "muito bom mesmo.",
  avaliacao: 4,
  usuario_id: matheuspalhares._id
});

var coment36 = new Comentario({
  titulo: "OMG!",
  texto: "Impressionado.",
  avaliacao: 5,
  usuario_id: guilhermesilva._id
});

var coment37 = new Comentario({
  titulo: "Horrorozo",
  texto: "Pior aula.",
  avaliacao: 1,
  usuario_id: alanjunior._id
});

var coment38 = new Comentario({
  titulo: "Ruim",
  texto: "Muito confuso.",
  avaliacao: 2,
  usuario_id: williampereira._id
});

var coment39 = new Comentario({
  titulo: "Legal",
  texto: "Conteúdo legal mas aulas ruins.",
  avaliacao: 3,
  usuario_id: pedroprates._id
});

var coment40 = new Comentario({
  titulo: "Ótimo",
  texto: "Só não dei 5 porque não tirei conceito A.",
  avaliacao: 4,
  usuario_id: jandirneto._id
});

coment1.save();
coment2.save();
coment3.save();
coment4.save();
coment5.save();
coment6.save();
coment7.save();
coment8.save();
coment9.save();
coment10.save();
coment11.save();
coment12.save();
coment13.save();
coment14.save();
coment15.save();
coment16.save();
coment17.save();
coment18.save();
coment19.save();
coment20.save();
coment21.save();
coment22.save();
coment23.save();
coment24.save();
coment25.save();
coment26.save();
coment27.save();
coment28.save();
coment29.save();
coment30.save();
coment31.save();
coment32.save();
coment33.save();
coment34.save();
coment35.save();
coment36.save();
coment37.save();
coment38.save();
coment39.save();
coment40.save();

var documento1 = new Documento({
  titulo: "Documento 1",
  tipo: "Link",
  usuarioFonte: tarik._id,
  comentarios: [coment3._id],
  avaliacao: 5
});

var documento2 = new Documento({
  titulo: "Documento 2",
  tipo: "Artigo",
  usuarioFonte: sd._id,
  comentarios: [coment4._id],
  avaliacao: 4
});

var documento3 = new Documento({
  titulo: "Documento 3",
  tipo: "Manual",
  usuarioFonte: pedro._id,
  comentarios: [coment5._id],
  avaliacao: 5
});

var documento4 = new Documento({
  titulo: "Documento 4",
  tipo: "Norma",
  usuarioFonte: carlos._id,
  comentarios: [coment6._id],
  avaliacao: 4
});

var documento5 = new Documento({
  titulo: "Documento 5",
  tipo: "Livro",
  usuarioFonte: silvana._id,
  comentarios: [coment7._id],
  avaliacao: 5
});

var documento6 = new Documento({
  titulo: "Documento 6",
  tipo: "Link",
  usuarioFonte: brunomodesto._id,
  comentarios: [coment8._id],
  avaliacao: 3
});

var documento7 = new Documento({
  titulo: "Documento 7",
  tipo: "Artigo",
  usuarioFonte: raissaresende._id,
  comentarios: [coment9._id],
  avaliacao: 2
});

var documento8 = new Documento({
  titulo: "Documento 8",
  tipo: "Manual",
  usuarioFonte: diogooliveira._id,
  comentarios: [coment10._id],
  avaliacao: 1
});

var documento9 = new Documento({
  titulo: "Documento 9",
  tipo: "Norma",
  usuarioFonte: elsonsilva._id,
  comentarios: [coment11._id],
  avaliacao: 3
});

var documento10 = new Documento({
  titulo: "Documento 10",
  tipo: "Livro",
  usuarioFonte: thulliozanetti._id,
  comentarios: [coment12._id],
  avaliacao: 5
});

var documento11 = new Documento({
  titulo: "Documento 11",
  tipo: "Link",
  usuarioFonte: rafaelcanuto._id,
  comentarios: [coment13._id],
  avaliacao: 4
});

var documento12 = new Documento({
  titulo: "Documento 12",
  tipo: "Artigo",
  usuarioFonte: williampereira._id,
  comentarios: [coment14._id],
  avaliacao: 2
});

var documento13 = new Documento({
  titulo: "Documento 13",
  tipo: "Manual",
  usuarioFonte: guilhermesilva._id,
  comentarios: [coment15._id],
  avaliacao: 1
});

var documento14 = new Documento({
  titulo: "Documento 14",
  tipo: "Norma",
  usuarioFonte: paulocirino._id,
  comentarios: [coment16._id],
  avaliacao: 3
});

var documento15 = new Documento({
  titulo: "Documento 15",
  tipo: "Livro",
  usuarioFonte: alanjunior._id,
  comentarios: [coment17._id],
  avaliacao: 5
});

var documento16 = new Documento({
  titulo: "Documento 16",
  tipo: "Link",
  usuarioFonte: pedro._id,
  comentarios: [coment18._id],
  avaliacao: 4
});

var documento17 = new Documento({
  titulo: "Documento 17",
  tipo: "Artigo",
  usuarioFonte: pedrovenancio._id,
  comentarios: [coment19._id],
  avaliacao: 2
});

var documento18 = new Documento({
  titulo: "Documento 18",
  tipo: "Manual",
  usuarioFonte: pedroprates._id,
  comentarios: [coment20._id],
  avaliacao: 3
});

var documento19 = new Documento({
  titulo: "Documento 19",
  tipo: "Norma",
  usuarioFonte: matheuspalhares._id,
  comentarios: [coment21._id],
  avaliacao: 2
});

var documento20 = new Documento({
  titulo: "Documento 20",
  tipo: "Livro",
  usuarioFonte: matheussilva._id,
  comentarios: [coment22._id],
  avaliacao: 1
});


documento1.save();
documento2.save();
documento3.save();
documento4.save();
documento5.save();
documento6.save();
documento7.save();
documento8.save();
documento9.save();
documento10.save();
documento11.save();
documento12.save();
documento13.save();
documento14.save();
documento15.save();
documento16.save();
documento17.save();
documento18.save();
documento19.save();
documento20.save();

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
  codigo: "DCC004",
  nome: "ALGORITMOS E ESTRUTURAS DE DADOS II",
  semestre: 2,
  comentarios: [coment7._id],
  professores: ["Maria"],
  cargaHoraria: 60,
  dificuldade: 3,
  avaliacao: 4,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento2._id, documento18._id]
});

var disciplina3 = new Disciplina({
  codigo: "ELT059",
  nome: "SISTEMAS DIGITAIS",
  semestre: 2,
  comentarios: [coment11._id, coment38._id],
  professores: ["Fernando"],
  cargaHoraria: 45,
  dificuldade: 3,
  avaliacao: 5,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento14._id, documento3._id]
});

var disciplina4 = new Disciplina({
  codigo: "ELE065",
  nome: "ANALISE DE CIRCUITOS ELETRICOS II",
  semestre: 3,
  comentarios: [coment6._id],
  professores: ["Felipe"],
  cargaHoraria: 30,
  dificuldade: 5,
  avaliacao: 2,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento6._id, documento8._id]
});

var disciplina5 = new Disciplina({
  codigo: "ELT060",
  nome: "ANALISE DE SISTEMAS DINAMICOS LINEARES",
  semestre: 4,
  comentarios: [coment16._id, coment20._id],
  professores: ["Luiza"],
  cargaHoraria: 60,
  dificuldade: 5,
  avaliacao: 4,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento15._id, documento11._id]
});

var disciplina6 = new Disciplina({
  codigo: "EMA255",
  nome: "FLUIDOS E TERMODINAMICA COMPUTACIONAL",
  semestre: 5,
  comentarios: [coment6._id],
  professores: ["Alexandre"],
  cargaHoraria: 60,
  dificuldade: 2,
  avaliacao: 3,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento13._id, documento12._id]
});

var disciplina7 = new Disciplina({
  codigo: "ELE079",
  nome: "ELETROMAGNETISMO COMPUTACIONAL",
  semestre: 5,
  comentarios: [coment32._id, coment24._id],
  professores: ["Adriano"],
  cargaHoraria: 60,
  dificuldade: 5,
  avaliacao: 2,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento7._id, documento19._id]
});

var disciplina8 = new Disciplina({
  codigo: "ELE088",
  nome: "TEORIA DA DECISAO",
  semestre: 8,
  comentarios: [coment16._id],
  professores: ["Fernando"],
  cargaHoraria: 30,
  dificuldade: 4,
  avaliacao: 3,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento17._id, documento12._id]
});

var disciplina9 = new Disciplina({
  codigo: "ELE086",
  nome: "LABORATORIO DE PROJETO IV",
  semestre: 8,
  comentarios: [coment8._id, coment10._id],
  professores: ["Guilherme"],
  cargaHoraria: 60,
  dificuldade: 3,
  avaliacao: 5,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento11._id, documento13._id]
});

var disciplina10 = new Disciplina({
  codigo: "ELE075",
  nome: "SISTEMAS NEBULOSOS",
  semestre: 8,
  comentarios: [coment23._id, coment24._id],
  professores: ["José"],
  cargaHoraria: 30,
  dificuldade: 4,
  avaliacao: 5,
  horarios: [{
    inicio: new Date(),
    fim: new Date()
  }],
  documentos: [documento19._id, documento20._id]
});

disciplina1.save();
disciplina2.save();
disciplina3.save();
disciplina4.save();
disciplina5.save();
disciplina6.save();
disciplina7.save();
disciplina8.save();
disciplina9.save();
disciplina10.save();

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
