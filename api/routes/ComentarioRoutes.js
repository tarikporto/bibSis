'use strict';

module.exports = function (app) {
  var bibSis = require("../controllers/ComentarioController");

  app.route("/comentarios")
    .get(bibSis.listarComentarios)
    .post(bibSis.criarComentario);

  app.route("/comentarios/query")
    .get(bibSis.buscarComentarios);

  app.route("/comentarios/:comentarioId")
    .get(bibSis.lerComentario)
    .put(bibSis.editarComentario)
    .delete(bibSis.deletarComentario);
}
