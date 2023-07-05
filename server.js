//proxy 
const express = require('express')
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware')
const next = require('next')


const app = next({ dev: true, port: 3000 })
const handle = app.getRequestHandler()




;(async () => {
  await app.prepare()
  const server = express()
  server.disable('x-powered-by')


  server.use(
    express.json({ limit: '20mb' }),
    express.urlencoded({ extended: true, limit: '20mb' }),
    createProxyMiddleware(`/api`, {
      target: 'https://27b6-2001-44c8-4710-635d-5c94-9708-97c7-4221.ngrok-free.app',
      secure: false,
      changeOrigin: true,
      onProxyReq: fixRequestBody,
      onProxyRes: (proxyRes, req, res) => {
        const ORIGIN = req.headers.origin || '*'
        proxyRes.headers['access-control-allow-origin'] = ORIGIN
        proxyRes.headers['User-Agent'] = ''
        proxyRes.headers['ngrok-skip-browser-warning'] = 'true' 
      },
    })
  )

  server.get(`/health`, (req, res) => res.json({ status: 'UP' }))

  server.use((req, res) => {
    handle(req, res)
  })

  server.listen(3000, () =>
      console.log(`App (http) listening on port 3000 ENV: dev`)
    )
})()
