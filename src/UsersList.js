import React from 'react'
import axios from 'axios'; //npm install axios
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    constructor() {
        console.log('constructor'); //1st constructor  gets called
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users';
    /* 
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            const users = JSON.parse(xhr.responseText);
            this.setState({ users })
        }
    */
       //to handle asynchronous operations, we make use of promises.
       //when making front-end to back-end request, asynchronous call happens
       axios.get(url)
       .then((response) => {
           const users = response.data
           this.setState({ users })
       })
       .catch((err) => {
           console.log(err);
       })
    }

    render() {
        return (
            <div>
                <h2>Listing users - {this.state.users.length}</h2>
                <ul>
                    { this.state.users.map((user) => {
                        return <li key={user.id}> <Link to={`/users/${user.id}`}> {user.name} </Link> </li>
                    }) }
                </ul>
            </div>
        )
    }
}

export default UserList