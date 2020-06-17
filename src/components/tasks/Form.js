import React from 'react'
import axios from 'axios'

class TaskForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            completed: false,
            dueDate: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleComplete = (e) => {
        const completed = e.target.checked
        this.setState({ completed })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            title: this.state.title,
            description: this.state.description,
            completed: this.state.completed,
            dueDate: this.state.dueDate,
            createdAt: new Date()
        }

        axios.post('http://localhost:3033/tasks', formData)
        .then((response) => {
            let task = response.data
            this.props.addTask(task)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h2>Add task</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input 
                        type="text"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.handleChange}
                        placeholder="title"
                    /> <br />

                    <label htmlFor="description">Description: </label>
                    <textarea
                        value={this.state.description}
                        name="description"
                        onChange={this.handleChange}
                        placeholder="description"
                    ></textarea> <br />

                    <input 
                        type="checkbox"
                        checked={this.state.completed}
                        onChange={this.handleComplete}
                    /> <label>Complete</label> <br />

                    <label>Due Date</label>
                    <input 
                        type="date"
                        value={this.state.dueDate}
                        onChange={this.handleChange}
                        name="dueDate"
                    /> <br />

                    <input 
                        type="submit"
                        value="Add Task"
                    />
                </form>
            </div>
        )
    }
}

export default TaskForm