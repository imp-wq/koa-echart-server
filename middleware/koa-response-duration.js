// 计算消耗时常的中间件

export default async (ctx, next) => {
  const start_time = Date.now()
  await next()
  const end_time = Date.now()
  const duration = end_time - start_time
  // 设置响应头
  ctx.set('X-Response-Time', `${duration}ms`)
}
