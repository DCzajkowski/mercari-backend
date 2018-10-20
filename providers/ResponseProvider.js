'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ResponseProvider extends ServiceProvider {
  boot() {
    const Response = use('Adonis/Src/Response')

    Response.macro('error', function (status, message = '') {
      this.status(status).send({ message })
    })
  }
}

module.exports = ResponseProvider
