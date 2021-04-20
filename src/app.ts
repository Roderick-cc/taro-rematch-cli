/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-20 18:49:09
 * @FilePath: /taro-cli/src/app.ts
 */
import React, { Component } from 'react'
import './app.scss'

class App extends Component {

  // this.props.children 是将要会渲染的页面
  render(): JSX.Element | React.ReactNode {
    return this.props.children
  }
}

export default App
