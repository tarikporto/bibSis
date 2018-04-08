'use strict';

var mongoose = require("mongoose"),
  Disciplina = mongoose.model("Disciplina");

exports.buscarDisciplinas = function (req, res) {
  Disciplina.find(req.query, function(err, disciplina) {
    if(err)
      res.send(err);
    res.json(disciplina);
  });
};

exports.listarDisciplinas = function (req, res) {
  Disciplina.find({}, function(err, disciplina) {
    if(err)
      res.send(err);
    res.json(disciplina);
  });
};

exports.criarDisciplina = function (req, res) {
  var novaDisciplina = new Disciplina(req.body);
  novaDisciplina.save(function(err, disciplina) {
    if(err)
      res.send(err);
    res.json(disciplina);
  });
};

exports.lerDisciplina = function (req, res) {
  Disciplina.findById(req.params.disciplinaId, function(err, disciplina) {
    if(err)
      res.send(err);
    res.json(disciplina);
  });
}

exports.editarDisciplina = function (req, res) {
  Disciplina.findOneAndUpdate({
    _id: req.params.disciplinaId
  }, req.body, {new: true}, function (err, disciplina) {
    if(err)
      res.send(err);
    res.json(disciplina);
  });
}

exports.deletarDisciplina = function(req, res) {
  Disciplina.remove({
    _id: req.params.disciplinaId
  }, function(err, disciplina) {
    if (err)
      res.send(err);
    res.json({ message: 'Disciplina deletada' });
  });
};
