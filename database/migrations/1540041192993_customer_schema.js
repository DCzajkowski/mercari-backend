'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProviderSchema extends Schema {
  up() {
    this.create('customers', (table) => {
      table.increments()
      table.string('name')
      table.string('token').unique()
    })
  }

  down() {
    this.drop('customers')
  }
}

module.exports = ProviderSchema
