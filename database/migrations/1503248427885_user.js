'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
