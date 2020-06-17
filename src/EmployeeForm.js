import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class EmployeeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            gender: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleGender = (gender) => {
        this.setState({ gender })
    }

    handleAutoComplete = (e) => {
        let userName = e.target.value;
        const url = `https://api.genderize.io/?name=${userName}`
        axios.get(url)
        .then((response) => {
            this.setState({ gender: response.data.gender})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender
        }

        console.log(formData);

        this.props.addEmployee(formData)

        this.setState({
            id: '',
            name: '',
            email: '',
            gender: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Add your employee details to the employee table</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onBlur={this.handleAutoComplete}
                    /> <br />

                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /> <br />

                    <label htmlFor="gender">Gender: </label>
                    <input 
                        type="radio" 
                        name="gender"
                        checked={this.state.gender == 'male'}
                        onChange={() => {
                            this.handleGender('male')
                        }}

                    /> Male
                    <input 
                        type="radio" 
                        name="gender"
                        checked={this.state.gender == 'female'}
                        onChange={() => {
                            this.handleGender('female')
                        }}
                    /> Female <br /><br />

                    <input type="submit" value="Add Employee" />
                </form>
            </div>
        )
    }
}

EmployeeForm.propTypes = {
    addEmployee: PropTypes.func.isRequired
}

export default EmployeeForm 