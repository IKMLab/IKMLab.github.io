import React from 'react'
import AppStyle from './App.module.scss'

export default class App extends React.Component {
  render() {
    console.log('App component')
    return (<div>
      <h1 className={ AppStyle.root }>hello world</h1>
    </div>)
  }
}
