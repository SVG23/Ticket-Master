import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom' //npm install react-router-dom
import Home from './components/static/Home'
import About from './components/static/About'
import Services from './components/static/Services'
import Contact from './components/static/Contact'
import UserList from './UsersList'
import UserShow from './UserShow'

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>My App</h1>
                <Link to="/">Home</Link> -
                <Link to="/about">About</Link> -
                <Link to="/services">Services</Link> -
                <Link to="/users">Users</Link> -
                <Link to="/contact">Contact</Link>

                <Route path="/" component={Home} exact={true}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/services" component={Services}></Route>
                <Route path="/users" component={UserList} exact={true}></Route>
                <Route path="/users/:id" component={UserShow}></Route>
                <Route path="/contact" component={Contact}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App