import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'


const HelloApp = () => (
    <Router>
        <div style={{margin: 20}}>
            <HelloHeader />
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/ja' component={HelloJapanese} />
                <Route path='/en' component={HelloEnglish} />
                <Route path='/cn' component={HelloChinese} />
            </div>
            <HelloFooter />
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h1>Hello App</h1>
        <p>言語を選択してください</p>
        <ul>
            <li><a href='/ja'>日本語</a></li>
            <li><a href='/en'>English</a></li>
            <li><a href='/cn'>中文</a></li>
        </ul>
    </div>
)

const HelloHeader = () => (
    <div>
        <h3 style={styleHeader}><a href='/'>Hello App</a></h3>
        <p>
            [<a href='/ja'>日本語</a>]
            [<a href='/en'>English</a>]
            [<a href='/cn'>中文</a>]
        </p>
    </div>
)

const HelloFooter = () => (
    <div style={styleHeader}>
        挨拶を色々な言語で表示するアプリです。
    </div>
)


const HelloJapanese = () => (
    <div>
        <h1>こんにちは</h1>
    </div>
)

const HelloEnglish = () => (
    <div>
        <h1>Hello</h1>
    </div>
)

const HelloChinese = () => (
    <div>
        <h1>你好</h1>
    </div>
)

const styleHeader = {
    backgroundColor: 'orange',
    color: 'white',
    padding: 8
}

export default HelloApp