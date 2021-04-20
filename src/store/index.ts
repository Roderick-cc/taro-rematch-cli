/*
 * @Description: 公共状态
 * @Author: shide
 * @Date: 2021-04-20 19:45:14
 * @LastEditTime: 2021-04-20 19:45:14
 * @FilePath: /taro-cli/src/store/index.ts
 */
import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import models, { RootModel } from './models/index'


const store = init({ models })
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
export default store