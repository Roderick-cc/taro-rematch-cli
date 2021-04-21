/*
 * @Description: models
 * @Author: shide
 * @Date: 2021-04-20 19:48:42
 * @LastEditTime: 2021-04-20 20:03:21
 * @FilePath: /taro-cli/src/store/models/index.ts
 */
import { Models } from '@rematch/core'
import { GlobalModel } from './global'

export interface RootModel extends Models<RootModel> {
  global: typeof GlobalModel

}

const models: RootModel = {
  global: GlobalModel,
}

export default models