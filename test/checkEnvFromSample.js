'use strict'

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
const appRootDir = require('app-root-dir').get()
const checkEnv = require('check-env')
const { keys } = require('lodash/fp')

const checkEnvFromSample = () => {
  const envSamplePath = path.join(appRootDir, 'env.sample')
  assert(fs.existsSync(envSamplePath), 'env.sample not found')
  const str = fs.readFileSync(envSamplePath)
  const config = dotenv.parse(str)
  checkEnv(keys(config)) // will throw if any are missing
}

module.exports = checkEnvFromSample
