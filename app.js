// 服务器的入口文件
import Koa from 'koa'
import resDurationMiddleware from './middleware/koa-response-duration.js'  
import resHeaderMiddleware from './middleware/koa-response-header.js'
import resDataMiddleware from './middleware/koa-response-data.js'
  
// 1.创建koa实例对象
const app=new Koa()

// 2.绑定中间件
// 记录响应时间要放在第一个
app.use(resDurationMiddleware)
app.use(resHeaderMiddleware)
app.use(resDataMiddleware)
// 3.绑定端口号
const port=9000
app.listen(port,()=>{
  console.log(`http server run at ${port}`)
})
