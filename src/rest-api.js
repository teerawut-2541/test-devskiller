// * You may uncomment one of these modules:
const express = require('express');
// const koa = require('koa');
// const hapi = require('@hapi/hapi');
// const restify = require('restify');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
module.exports = (stepService) => {
  const REST_PORT = 8080;
  app.get('/users/:username/steps', (req, res) => {
    const { username } = req.params
    const user = stepService.get(username)

    if (!user) res.status(404).send({ "error": "User doesn't exist" })
   
    return res.status(200).send(user)
    
  })
  app.put('/users/:username/steps', (req, res) => {
    const { username } = req.params
    const body = req.body
    const user = stepService.update(username,new Date().getTime(),body)
    if (!user) res.status(404).send({ "error": "User doesn't exist" })
    return res.status(200).send(user)
  })
  app.post('/users/:username/steps', (req, res) => {
    const { username } = req.params
    const user = stepService.add(username,new Date().getTime(),17)
    if (!user) res.status(404).send({ "error": "User doesn't exist" })
    return res.status(200).send(user)
  })
  app.listen(REST_PORT)
  // * TODO: Write the GET endpoint, using `stepService` for data access


};
