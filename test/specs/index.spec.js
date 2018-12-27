'use strict'

const {
  checkEnvFromSample,
  checkRequireAllFiles,
} = require('../..')

describe('env', () => {
  it('env.sample should exist, and all env vars should be set', checkEnvFromSample)
})

describe('dependencies', () => {
  it('should be able to require all files', checkRequireAllFiles)
})
