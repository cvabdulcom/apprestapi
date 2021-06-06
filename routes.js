'use strict'

module.exports = function(app){
    var jsonku = require('./controller')

    app.route('/')
        .get(jsonku.index)

    app.route('/datamahasiswa')
        .get(jsonku.datamahasiswa)

    app.route('/datamahasiswa/:id')
        .get(jsonku.datamahasiswaid)
}