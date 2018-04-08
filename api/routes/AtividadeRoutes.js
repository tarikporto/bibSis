'use strict';

module.exports = function (app) {
  var bibSis = require("../controllers/AtividadeController");

  app.route("/atividades")
    .get(bibSis.listarAtividades)
    .post(bibSis.criarAtividade);

  app.route("/atividades/query")
    .get(bibSis.buscarAtividades);

  app.route("/atividades/:atividadeId")
    .get(bibSis.lerAtividade)
    .put(bibSis.editarAtividade)
    .delete(bibSis.deletarAtividade);
}
