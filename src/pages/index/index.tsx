/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-20 18:49:26
 * @FilePath: /taro-cli/src/pages/index/index.tsx
 */
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

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
