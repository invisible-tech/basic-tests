'use strict'

process.env.NODE_ENV = 'test'

require('dotenv').config({ path: `${__dirname}/../.env` })
require('espower-loader')({ pattern: 'test/**/*.js' })
