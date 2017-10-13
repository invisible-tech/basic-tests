'use strict'

require('dotenv').config()

const checkEnvFromSample = require('./test/checkEnvFromSample')
const checkRequireAllFiles = require('./test/checkRequireAllFiles')

module.exports = {
  checkEnvFromSample,
  checkRequireAllFiles,
}
