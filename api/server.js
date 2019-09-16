// IMPORTS/INITIALIZATION =========================|
// ================================================|
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const tasksRouter = require('../tasks/tasks-router.js')
require('dotenv').config()
const server = express()
// GLOBAL MIDDLEWARES =============================|
// ================================================|
server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/api/tasks/', tasksRouter)
// ROOT ENDPOINT ==================================|
// ================================================|
server.get('/', (req, res) => {
  res.status(200).json({ api: 'is running' })
})
// EXPORT =========================================|
// ================================================|
module.exports = server
