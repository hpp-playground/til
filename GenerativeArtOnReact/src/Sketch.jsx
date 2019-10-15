import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketches from './sketchesList'
import themes from './themesList'
import params from './paramsList'


const Sketch = (props) => {
    const {id} = props.match.params
    const sketch = sketches[id]
    const Theme = themes[id]
    const param = params[id]
    return (
        <Theme>
            <P5Wrapper sketch={sketch} param={param} />
        </Theme>
    )
}

export default Sketch