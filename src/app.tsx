/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-21 12:08:26
 * @FilePath: /taro-cli/src/app.tsx
 */
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import './app.scss'



export default class App extends React.Component {


  render(): JSX.Element {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

