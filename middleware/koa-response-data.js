import path from 'path'
import { getJsonData } from '../utils/file_utils.js'

// 处理业务逻辑的中间件，根据请求的url读取json文件中的数据
export default async (ctx, next) => {
  const url = ctx.request.url
  const __dirname=path.resolve()
  const fileName=url.replace('/api','')
  const filePath=path.join(__dirname,'./data',fileName)+'.json'
  console.log(filePath)

try {
  const ret= await getJsonData(filePath)
  // console.log(ret)
  ctx.response.body=ret
} catch (error) {
  const errMsg={
    message:'读取文件失败'+error,
    status:404
  }
  ctx.response.body= JSON.stringify(errMsg)
}

  
  await next()
}
