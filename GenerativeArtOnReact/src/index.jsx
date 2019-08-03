import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import P5Wrapper from 'react-p5-wrapper'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import sketch from './sketch2'


const Theme = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: center / cover no-repeat url(https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2570&q=80);
`

class App extends React.Component {
  render () {
    return (
    <Fragment>
      <Reset />
      <Theme>
        <P5Wrapper sketch={sketch} />
      </Theme>
    </Fragment>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))

