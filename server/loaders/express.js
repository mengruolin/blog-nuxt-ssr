import express from 'express'
import bodyParser from 'body-parser'
import router from '../router'
import session from 'express-session'
import redis from 'redis'
import RedisConnect from 'connect-redis'
import { isLogin } from '../middle/routerVetify'

export default async ({ app }) => {
  const RedisStore = RedisConnect(session)
  const client = redis.createClient()

  client.on('error', (err) => {
    console.log(`Redis error:${err}`);
  })

  app.use(bodyParser.urlencoded({ extended: false }))
  
  app.use(bodyParser.json())

  app.use(session({
    genid: req => {
      if (req.body.uid) return req.body.uid
      const uid = Math.random().toString(16).slice(2)
      
      return req.body.userName+'_uid:'+uid
    },
    secret: process.env.SESSION_SECRET || 'IISSECRET',
    name: 'token',
    store: new RedisStore({
      client: client,
      // prefix: 'hgk',
    }),
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 1 * 60 * 60 * 1000 }
  }))

  // 挂路由鉴权

  app.use('/api/user', isLogin)

  router(app)

  return app
}
