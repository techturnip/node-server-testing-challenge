// IMPORTS/INITIALIZATION =========================|
// ================================================|
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
const server = express()
// GLOBAL MIDDLEWARES =============================|
// ================================================|
server.use(helmet())
server.use(express.json())
server.use(cors())
// ROOT ENDPOINT ==================================|
// ================================================|

// EXPORT =========================================|
// ================================================|
module.exports = server
