/*
 * @Description: index page
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-22 16:41:58
 * @FilePath: /taro-cli/src/pages/index/view.tsx
 */
import React, { useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

import { IndexBaseProp, IndexDispatch } from './service'

interface Iindex extends IndexBaseProp, IndexDispatch {

}

const Index: React.FC<> = (): JSX.Element => {

  useEffect(() => {
    // props.getInitModel({ id: 1, pageNow: 1, pageSize: 10 });
  }, [])

  return (
    <View className='index'>
      <Text>Hello world!</Text>

      <View className='con' />
    </View>
  )
}
export default Index