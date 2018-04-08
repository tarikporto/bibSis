'use strict';

module.exports = function (app) {
  var bibSis = require("../controllers/DocumentoController");

  app.route("/documentos")
    .get(bibSis.listarDocumentos)
    .post(bibSis.criarDocumento);

  app.route("/documentos/query")
    .get(bibSis.buscarDocumentos);

  app.route("/documentos/:documentoId")
    .get(bibSis.lerDocumento)
    .put(bibSis.editarDocumento)
    .delete(bibSis.deletarDocumento);
}
