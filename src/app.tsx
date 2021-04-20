/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-20 20:27:59
 * @FilePath: /taro-cli/src/app.tsx
 */
import React from 'react'
import './app.scss'
import { Provider } from 'react-redux'
import store from '@/store'



export default class App extends React.Component {


  render(): JSX.Element {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

