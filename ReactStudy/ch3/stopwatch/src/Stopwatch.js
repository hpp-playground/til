import react from 'react'
import './Stopwatch.css'

class Stopwatch extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isLive: false,
            curTime: 0,
            startTime: 0
        }
        this.timerId = 0

        //コンポーネントのマウント時に
        componentWillMount () {
            this.timerId = setInterval(e => {
                this.thick()
            }, 1000)
        }

        //アンマウント時に関数の定期実行関数を削除
        componentWillUnmount () {
            clearInterval(this.timerId)
        }
    }
}