import * as React from "react"

type Props = {}

type CounterState = {
  count: number
}

class Counter extends React.Component<any, CounterState> {
  constructor(props: Props) {
    super(props)
    this.state = { count: 0 }
    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={this.incrementCounter}>plus</button>
        <button onClick={this.decrementCounter}>minus</button>
      </div>
    )
  }
}

export default Counter
