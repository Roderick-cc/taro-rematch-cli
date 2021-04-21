/*
 * @Description: 全局配置
 * @Author: shide
 * @Date: 2021-04-20 20:50:09
 * @LastEditTime: 2021-04-21 12:11:07
 * @FilePath: /taro-cli/src/utils/globalConfig.ts
 */

import Taro from '@tarojs/taro'
import { IglobalConfig } from '@/type/globalType'
// 默认环境
let env = 'prod'
const version = '1.0.0'


// 读取调试环境
try {
  if (process.env.NODE_ENV === 'production') {
    env = 'prod'
    Taro.setStorageSync('env', 'prod')
  } else if (process.env.NODE_ENV === 'development') {
    env = 'test'
    Taro.setStorageSync('env', 'test')
  }
} catch (e) { console.error('er', e) }


/**
 * 正式环境配置
 */
const globalConfig: IglobalConfig = {
  env,
  hostUrl: 'https://mp.xxx.com',
  ossHost: 'https://media.xxxx.com',
  appId: 'xxxx',
  version,
}


/**
 * 测试环境配置
 */
if (env === 'test') {
  globalConfig.hostUrl = 'https://test.xxx.com'
  globalConfig.appId = 'wxc035ef42951bedd8'
  globalConfig.version = version
}



export default globalConfig