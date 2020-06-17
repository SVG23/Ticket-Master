import React from 'react'
import axios from 'axios'
import TaskTable from './Table'
import TaskForm from './Form'

class Tasks extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3033/tasks')
        .then((response) => {
            const tasks = response.data;
            this.setState({ tasks })
        })
    }

    addTask = (task) => {
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.concat(task)
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Listing Tasks - {this.state.tasks.length}</h2>

                <TaskTable data={this.state.tasks} />
                <TaskForm addTask={this.addTask} />
            </div>
        )
    }
}

export default Tasks