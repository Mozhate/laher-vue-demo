'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK: 'true',
  APP_BASE_API:{
    base:'http://localhost:8070',
    ext:'http://localhost:8080',
    auth:'http://localhost:8090',
  }
})
