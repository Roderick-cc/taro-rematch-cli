/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-20 21:33:42
 * @FilePath: /taro-cli/src/pages/index/view.tsx
 */
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {
  RequesPayloadInfo,
  ResponseInfo
} from '@/type/api/global'

/** 基础订阅道具 */
export interface IndexBaseProp {
  initData?: ResponseInfo

}

/** 基础订阅方法 */
export interface IndexDispatch {
  getInitModel: () => Promise<void | RequesPayloadInfo>
}



export default class Index extends Component {

  render(): JSX.Element {
    return (
      <View className="index">
        <Text>Hello world!</Text>

        <View className="con" />
      </View>
    )
  }
}
