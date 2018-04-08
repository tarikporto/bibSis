'use strict';

var mongoose = require("mongoose"),
  Atividade = mongoose.model("Atividade");

exports.buscarAtividades = function (req, res) {
  Atividade.find(req.query, function(err, atividade) {
    if(err)
      res.send(err);
    res.json(atividade);
  });
};

exports.listarAtividades = function (req, res) {
  Atividade.find({}, function(err, atividade) {
    if(err)
      res.send(err);
    res.json(atividade);
  });
};

exports.criarAtividade = function (req, res) {
  var novaAtividade = new Atividade(req.body);
  novaAtividade.save(function(err, atividade) {
    if(err)
      res.send(err);
    res.json(atividade);
  });
};

exports.lerAtividade = function (req, res) {
  Atividade.findById(req.params.atividadeId, function(err, atividade) {
    if(err)
      res.send(err);
    res.json(atividade);
  });
}

exports.editarAtividade = function (req, res) {
  Atividade.findOneAndUpdate({
    _id: req.params.atividadeId
  }, req.body, {new: true}, function (err, atividade) {
    if(err)
      res.send(err);
    res.json(atividade);
  });
}

exports.deletarAtividade = function(req, res) {
  Atividade.remove({
    _id: req.params.atividadeId
  }, function(err, atividade) {
    if (err)
      res.send(err);
    res.json({ message: 'Atividade deletada' });
  });
};
