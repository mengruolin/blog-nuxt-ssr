import express from 'express'
import { Nuxt, Builder } from 'nuxt'

async function startServer() {
  const config = require('../nuxt.config.js')
  config.dev = process.env.NODE_ENV !== 'production'

  const app = express()

  await require('./loaders').default({ expressApp: app })

  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)
  app.listen(port, host)

  var ip = require('ip');

  consola.ready({
    message: `Server listening on http://127.0.0.1:${port}, \n public address on http://${ip.address()}:${port}`,
    badge: true
  })

}

startServer()

