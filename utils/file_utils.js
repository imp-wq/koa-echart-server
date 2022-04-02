// 读取文件的工具方法
import fs from 'fs'

export function getJsonData(filePath){
  return new Promise((resolve,reject)=>{
    fs.readFile(filePath,'utf-8',(err,data)=>{
      if(err) return reject(err)
      else resolve(data)
    })
  })
}

