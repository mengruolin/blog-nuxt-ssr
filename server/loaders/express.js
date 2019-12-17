import express from 'express'
import bodyParser from 'body-parser'
import router from '../router'
import session from 'express-session'
import redis from 'redis'
import RedisConnect from 'connect-redis'

export default async ({ app }) => {
  const RedisStore = RedisConnect(session)
  const client = redis.createClient()

  app.use(bodyParser.urlencoded({ extended: false }))
  
  app.use(bodyParser.json())

  app.use(session({
    name: 'token',
    secret: 'cat',
    resave: true,
    saveUninitialized: true,
    store: new RedisStore({
      client: client,
      prefix: 'hgk',
    }),
    cookie: { maxAge: 1 * 60 * 60 * 1000 }
  }))

  app.use((req, res, next) => {
    // req.session.token = 'token'
    next()
  })

  router(app)

  return app
}
