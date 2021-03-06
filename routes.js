'use strict'

module.exports = function(app){
    var jsonku = require('./controller')

    app.route('/')
        .get(jsonku.index)

    app.route('/datamahasiswa')
        .get(jsonku.datamahasiswa)

    app.route('/datamahasiswa/:id_mahasiswa')
        .get(jsonku.datamahasiswaid)

    app.route('/tambahmahasiswa')
        .post(jsonku.tambahmahasiswa)

    app.route('/ubahmahasiswa')
        .put(jsonku.ubahmahasiswa)

    app.route('/hapusmahasiswa')
        .delete(jsonku.hapusmahasiswa)
}