'use strict';

var mongoose = require("mongoose"),
  Documento = mongoose.model("Documento");

exports.buscarDocumentos = function (req, res) {
  Documento.find(req.query, function(err, documento) {
    if(err)
      res.send(err);
    res.json(documento);
  });
};

exports.listarDocumentos = function (req, res) {
  Documento.find({}, function(err, documento) {
    if(err)
      res.send(err);
    res.json(documento);
  });
};

exports.criarDocumento = function (req, res) {
  var novoDocumento = new Documento(req.body);
  novoDocumento.save(function(err, documento) {
    if(err)
      res.send(err);
    res.json(documento);
  });
};

exports.lerDocumento = function (req, res) {
  Documento.findById(req.params.documentoId, function(err, documento) {
    if(err)
      res.send(err);
    res.json(documento);
  });
};

exports.editarDocumento = function (req, res) {
  Documento.findOneAndUpdate({
    _id: req.params.documentoId
  }, req.body, {new: true}, function (err, documento) {
    if(err)
      res.send(err);
    res.json(documento);
  });
};

exports.deletarDocumento = function(req, res) {
  Documento.remove({
    _id: req.params.documentoId
  }, function(err, documento) {
    if (err)
      res.send(err);
    res.json({ message: 'Documento deletada' });
  });
};
