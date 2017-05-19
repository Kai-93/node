/**
 * Created by Kaiser on 2017/5/18.
 */
'use strict'
const express = require('express')
const http = require('http')
const app = express()
const process = require('child_process')

app.get('/', function (req, res) {
  res.sendFile('/home/ubuntu/www')
})

app.post('/push_www', function (req, res) {
  process.exec('/home/ubuntu/node/www.sh', null, function (err, stdout, stderr) {
    console.log(err)
    console.log(stdout)
    console.log(stderr)
    res.send('ok')
  })
})

app.post('/push_node', function (req, res) {
  process.exec('/home/ubuntu/node/node.sh', null, function (err, stdout, stderr) {
    console.log(err)
    console.log(stdout)
    console.log(stderr)
    res.send('ok')
  })
})

let httpServer = http.createServer(app)

httpServer.listen(80)
