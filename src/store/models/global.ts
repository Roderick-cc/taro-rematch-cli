/*
 * @Description: global models
 * @Author: shide
 * @Date: 2021-04-20 20:03:00
 * @LastEditTime: 2021-04-20 21:30:28
 * @FilePath: /taro-cli/src/store/models/global.ts
 */

import { createModel } from '@rematch/core'
import { RootModel } from '@/store/models'

import {
  RequesPayloadInfo,
  ResponseInfo
} from '@/type/api/global'
import { getInitApi } from '@/api/global'

interface GlobalState {
  initData?: ResponseInfo
}


export const GlobalModel = createModel<RootModel>()({
  state: {
    initData: {}
  } as GlobalState,
  effects: (dispatch) => ({
    async getInitModel(payload: RequesPayloadInfo, state): Promise<void | ResponseInfo> {
      try {
        const response = await getInitApi(payload)
        // 修改数据
        dispatch.global.SAVE_inti_data(response)
        return response

      } catch (err) {
        return undefined
      }
    }
  }),
  reducers: {
    SAVE_inti_data(state, initData: ResponseInfo): GlobalState {

      return { ...state, initData }
    }
  },
})