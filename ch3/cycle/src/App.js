import React, { Component } from 'react';
import './App.css';

class App extends Component {

  //マウント時のメソッドをカスタマイズ
  constructor (props) {
    super(props)
    console.log('constructor')
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
  }

  //コンポーネントの更新時メソッドをカスタマイズ
  componentWillReceiveProps (_nextProps) {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  //アンマウント時の（以下略）
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }


  render() {
    console.log('render')
    const setStateHandler = () => {
      console.log('* call setState()')
      this.setState({r: Math.random()})
    }
    return (
      <div>
        <button onClick={setStateHandler}>
          setState
        </button>
      </div>
    )
  }
}

export default App;
