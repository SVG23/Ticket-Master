import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id; //get the user clicked id from props.
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            //console.log(response.data);
            const user = response.data;
            this.setState({ user })
        })
    }

    render() {
        console.log('show user', this.props);
        return (
            <div>
                <h1>Showing user of id - {this.props.match.params.id} </h1>
                <p>Name - {this.state.user.name}</p>
                <p>Username - {this.state.user.username}</p>
                <p>Email - {this.state.user.email}</p>
                <p>Contact - {this.state.user.phone}</p>
            </div>
        )
    }
}

export default UserShow