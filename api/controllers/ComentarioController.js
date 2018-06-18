'use strict';

var mongoose = require("mongoose"),
  Comentario = mongoose.model("Comentario");

exports.buscarComentarios = function (req, res) {
  Comentario.find(req.query, function(err, comentario) {
    if(err)
      res.send(err);
    res.json(comentario);
  });
};

/*exports.buscarComentarioMaisRecente = function (req, res) {
  Comentario.findOne(req.query).sort({data: -1}).exec(function(err, comentario) {
    if(err)
      res.send(err);
    res.json(comentario);
  });
};*/


exports.listarComentarios = function (req, res) {
  Comentario.find({}, function(err, comentario) {
    if(err)
      res.send(err);
    res.json(comentario);
  });
};

exports.criarComentario = function (req, res) {
  var novoComentario = new Comentario(req.body);
  novoComentario.save(function(err, comentario) {
    if(err)
      res.send(err);
    res.json(comentario);
  });
};

exports.lerComentario = function (req, res) {
  Comentario.findById(req.params.comentarioId, function(err, comentario) {
    if(err)
      res.send(err);
    res.json(comentario);
  });
}

exports.editarComentario = function (req, res) {
  Comentario.findOneAndUpdate({
    _id: req.params.comentarioId
  }, req.body, {new: true}, function (err, comentario) {
    if(err)
      res.send(err);
    res.json(comentario);
  });
}

exports.deletarComentario = function(req, res) {
  Comentario.remove({
    _id: req.params.comentarioId
  }, function(err, comentario) {
    if (err)
      res.send(err);
    res.json({ message: 'Comentario deletado' });
  });
};
