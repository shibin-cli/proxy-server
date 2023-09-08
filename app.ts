import Koa from 'koa'
import connect from 'koa2-connect'
import { createProxyMiddleware } from 'http-proxy-middleware'
import cors from '@koa/cors'
import * as dotenv from 'dotenv'

dotenv.config()
const BASE = process.env['BASE'] || '/api'
const TARGETS = process.env['TARGET']?.split(',')

function createApp(app: Koa, target: string, port: string | number) {
  const proxy = createProxyMiddleware({
    target,
    changeOrigin: true
  })
  app.use(cors())
  app.use(async (ctx, next) => {
    if (ctx.path.startsWith(BASE)) {
      await connect(proxy)(ctx, next)
    } else {
      await next()
    }
  })

  app.listen(port, () => {
    console.log(`Proxy server is running on  \x1b[92mhttp://localhost:${port} \x1b[0m`)
  })
}

if (TARGETS?.length) {
  TARGETS.forEach((target) => {
    const app = new Koa()
    target = target.trim()
    const port = target.split(':')[2]
    createApp(app, target, port)
  })
} else {
  const hosts = process.env['PORT']?.split(',') || [8080]
  const host = process.env['HOST']
  if (!host) {
    throw new Error('请在 .env 文件中配置 HOST')
  }
  hosts.forEach((port) => {
    const app = new Koa()
    createApp(app, `${host.trim()}:${port.trim()}`, port.trim())
  })
}
