'use strict'

const appRootDir = require('app-root-dir').get()
const assert = require('assert')
const fs = require('fs')
const ig = require('ignore')
const path = require('path')

const { sync } = require('glob-gitignore')
const {
  compact,
  map,
} = require('lodash/fp')

const checkRequireAllFiles = () => {
  const ignore = ig()
  ignore.add(fs.readFileSync(path.join(appRootDir, '.gitignore')).toString())
  ignore.add('test/**')
  const files = sync(['**/*.js'], { ignore })
  assert(files.length > 0, 'no files found!')
  const getFilenameIfUnrequirable = filename => {
    const fullPath = path.join(appRootDir, filename)
    try {
      require(fullPath)
      return
    } catch (err) {
      return fullPath
    }
  }
  const unrequirable = compact(map(getFilenameIfUnrequirable)(files))
  assert(
    unrequirable.length === 0,
    `The following files caused an error when required: \n${unrequirable.sort().join('\n')}`
  )
}

module.exports = checkRequireAllFiles
