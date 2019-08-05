import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketches from './sketchesList'
import themes from './themesList'


const Sketch = (props) => {
    const {id} = props.match.params
    const sketch = sketches[id]
    const Theme = themes[id]
    return (
        <Theme>
            <P5Wrapper sketch={sketch} />
        </Theme>
    )
}

export default Sketch