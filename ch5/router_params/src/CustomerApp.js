import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

const users = [
    {id: 1, name: 'yamada', info: 'web'},
    {id: 2, name: 'sasaki', info: 'web chief'},
    {id: 3, name: 'yoshida', info: 'designer'}
]

const CustomerApp = () => (
    <Router>
        <div style={{margin: 20}}>
            <div>
                <Switch>
                    <Route path='/user/:id' component={UserCard} />
                    <Route component={UserList} />
                </Switch>
            </div>
        </div>
    </Router>
)

class UserList extends React.Component {
    render () {
        const ulist = users.map(e => (
            <li key={e.id}>
                <Link to={'/user/'+e.id}>{e.name}</Link>
            </li>
        ))
        return (
            <ul>{ulist}</ul>
        )
    }
}

class UserCard extends React.Component {
    render () {
        const {params} = this.props.match
        const id = parseInt(params.id, 10)
        const user = users.filter(e => e.id === id)[0]
    
        return (
            <div>
                <div>{id}: {user.name} - {user.info}</div>
                <div><Link to='/'>→戻る</Link></div>
            </div>
        )
    }
}

export default CustomerApp