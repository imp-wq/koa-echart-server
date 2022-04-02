// 设置响应头的中间件
export default async (ctx,next) => {
  const contentType = 'application/json;charset=utf-8'
  ctx.set('Content-Type',contentType)
  ctx.response.body='{"success":true}'
  // 设置跨域的响应头
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.set('Access-Control-Allow-Methods','OPTION,GET,PUT,POST,DELETE')
  await next()
}
