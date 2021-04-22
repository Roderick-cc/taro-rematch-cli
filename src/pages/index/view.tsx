/*
 * @Description: index page
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-22 17:49:42
 * @FilePath: /taro-cli/src/pages/index/view.tsx
 */
import React, { useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

import { IndexBaseProp, IndexDispatch } from './service'

interface Iindex extends IndexBaseProp, IndexDispatch {
  number?: number
}

const Index: React.FC<Iindex> = (): JSX.Element => {

  useEffect(() => {
    // props.getInitModel({ id: 1, pageNow: 1, pageSize: 10 });
  }, [])

  return (
    <View className="index">
      <Text>Hello world!</Text>

      <View className="con" />
    </View>
  )
}
export default Index