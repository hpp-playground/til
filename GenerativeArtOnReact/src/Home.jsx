import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
    <ul>
        <li><Link to='/1'>sketch1</Link></li>
        <li><Link to='/2'>sketch2</Link></li>
    </ul>
)

export default Home