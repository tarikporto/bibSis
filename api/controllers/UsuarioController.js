'use strict';

var mongoose = require("mongoose"),
  Usuario = mongoose.model("Usuario");

exports.buscarUsuarios = function (req, res) {
  Usuario.find(req.query, function(err, usuario) {
    if(err)
      res.send(err);
    res.json(usuario);
  });
};

exports.listarUsuarios = function (req, res) {
  Usuario.find({}, function(err, usuario) {
    if(err)
      res.send(err);
    res.json(usuario);
  });
};

exports.criarUsuario = function (req, res) {
  var novoUsuario = new Usuario(req.body);
  novoUsuario.save(function(err, usuario) {
    if(err)
      res.send(err);
    res.json(usuario);
  });
};

exports.lerUsuario = function (req, res) {
  Usuario.findById(req.params.usuarioId, function(err, usuario) {
    if(err)
      res.send(err);
    res.json(usuario);
  });
}

exports.editarUsuario = function (req, res) {
  Usuario.findOneAndUpdate({
    _id: req.params.usuarioId
  }, req.body, {new: true}, function (err, usuario) {
    if(err)
      res.send(err);
    res.json(usuario);
  });
}

exports.deletarUsuario = function(req, res) {
  Usuario.remove({
    _id: req.params.usuarioId
  }, function(err, usuario) {
    if (err)
      res.send(err);
    res.json({ message: 'Usuario deletado' });
  });
};
