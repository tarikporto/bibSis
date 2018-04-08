'use strict';

module.exports = function (app) {
  var bibSis = require("../controllers/UsuarioController");

  app.route("/usuarios")
    .get(bibSis.listarUsuarios)
    .post(bibSis.criarUsuario);

  app.route("/usuarios/query")
    .get(bibSis.buscarUsuarios);

  app.route("/usuarios/:usuarioId")
    .get(bibSis.lerUsuario)
    .put(bibSis.editarUsuario)
    .delete(bibSis.deletarUsuario);
}
