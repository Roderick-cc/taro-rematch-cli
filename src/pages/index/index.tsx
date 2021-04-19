/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-19 19:54:20
 * @FilePath: /taro-cli/src/pages/index/index.tsx
 */
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text className='index-txt'>Hello world!</Text>
      </View>
    )
  }
}
