'use strict';

module.exports = function (app) {
  var bibSis = require("../controllers/DisciplinaController");

  app.route("/disciplinas")
    .get(bibSis.listarDisciplinas)
    .post(bibSis.criarDisciplina);

  app.route("/disciplinas/query")
    .get(bibSis.buscarDisciplinas);

  app.route("/disciplinas/queryParcial")
    .get(bibSis.buscarDisciplinasPorNomeParcial);

  app.route("/disciplinas/:disciplinaId")
    .get(bibSis.lerDisciplina)
    .put(bibSis.editarDisciplina)
    .delete(bibSis.deletarDisciplina);
}
