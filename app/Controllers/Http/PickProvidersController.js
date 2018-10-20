'use strict'

const Customer = use('App/Models/Customer')

class PickProvidersController {
  async index({ response, params }) {
    const customer = await Customer.query().where('name', params.customer).first()

    if (customer === null) {
      return response.error(404, 'Customer with given name does not exist.')
    }

    return ''
  }
}

module.exports = PickProvidersController
