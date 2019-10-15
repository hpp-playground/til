import React, {Fragment} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'
import Home from './Home'
import Sketch from './Sketch'


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Reset />
          <Route exact path='/' component={Home} />
          <Route path='/:id' component={Sketch} />
        </Fragment>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))

