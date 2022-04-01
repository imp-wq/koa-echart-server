import koa from 'koa'

const app = new koa()

app.use((ctx,next)=>{
  console.log(ctx.request.url)
  console.log('第一层中间件...1')
  ctx.response.body='hello world'
  next()
  console.log('第一层中间件...2')
})

app.use((ctx,next)=>{
  console.log('第二层中间件...1')
  next()
  console.log('第一层中间件...2')
})

app.use((ctx,next)=>{
  console.log('第三层中间件')
})

const port=3000
app.listen(port,()=>{
  console.log(`http server run at:http://localhost:${port}`)
})