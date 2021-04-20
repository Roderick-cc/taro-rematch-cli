/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-20 20:52:16
 * @LastEditTime: 2021-04-20 20:55:01
 * @FilePath: /taro-cli/src/type/globalType.d.ts
 */


export interface IglobalConfig {
  /** 环境 */
  env: string

  /** 请求接口 */
  hostUrl: string

  /** oss地址 */
  ossHost: string

  /** appId */
  appId: string

  /** 版本 */
  version,
}