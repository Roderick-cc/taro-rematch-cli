/*
 * @Description: request 
 * @Author: shide
 * @Date: 2021-04-20 20:46:45
 * @LastEditTime: 2021-04-21 12:11:56
 * @FilePath: /taro-cli/src/utils/request.ts
 */


import Taro, { getStorageSync } from '@tarojs/taro'
import globalConfig from './globalConfig'



export default async function request(url: string, options: Record<string, unknown>): Promise<unknown> {
  options.header = {
    Authorization: getStorageSync('loginToken')
  }
  const newOptions = {
    ...options,
    url: `${globalConfig.hostUrl}${url}`,
    data: options.data, // 请求传参
  }

  return (
    Taro.request(newOptions)
      .then((response) => {
        // const reqTip = getStorageSync('reqTip')
        // if (!!reqTip) {
        //   console.log('start-------' + (new Date()).toLocaleString() + '---------------')
        //   console.log('接口路由:', newOptions.url)
        //   console.log('接口传参:', newOptions.data)
        //   console.log('后端返数:', response.data)
        //   console.log('end----------------------')
        // }
        const trueCode = 0
        if (response.data.code === trueCode) { return response.data.data }

        const error: Ierror = new Error(response.data.message)
        error.name = 'serverError'
        error.response = { code: response.data.code, msg: response.data.message }
        throw error
      })
      .catch((e) => {
        throw e
      })
  )
}

interface Ierror {
  name: string,
  response?: Record<string, unknown>
}
