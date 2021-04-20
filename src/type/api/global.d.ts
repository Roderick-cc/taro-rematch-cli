/*
 * @Description: globa 接口参数
 * @Author: shide
 * @Date: 2021-04-20 20:32:23
 * @LastEditTime: 2021-04-20 21:01:22
 * @FilePath: /taro-cli/src/type/api/global.d.ts
 */

/** 请求参数 */
export interface RequesPayloadInfo {
  id: number
  pageSize: number
  pageNow: number
}
/** 相应参数 */
export interface ResponseInfo {
  /** 是否拼团 */
  isGroup: number
  /** 是否秒杀 */
  isLimit: number
  /** 下单前价格 单位分 */
  displayAmount: number
}