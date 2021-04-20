/*
 * @Description: global request
 * @Author: shide
 * @Date: 2021-04-20 20:44:09
 * @LastEditTime: 2021-04-20 21:15:57
 * @FilePath: /taro-cli/src/api/global.ts
 */
import {
  RequesPayloadInfo,
  ResponseInfo
} from '@/type/api/global'

import request from '@/utils/request'

export async function getInitApi(params: RequesPayloadInfo): Promise<ResponseInfo> {
  return request('/name-card/getNameCardInfo', {
    method: 'POST',
    data: params
  })
}
