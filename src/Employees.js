import React from 'react'
import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'

class Employees extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: [
                {id: 'emp001', name: 'abhi', email: 'abhi@gmail.com', gender: 'male'},
                {id: 'emp002', name: 'sahana', email: 'sahana@gmail.com', gender: 'female'},
                {id: 'emp003', name: 'srujan', email: 'srujan@gmail.com', gender: 'male'}
            ]
        }
    }

    addEmployee = (emp) => {
        this.setState((prevState) => {
            return {
                employees: prevState.employees.concat(emp)
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Listing Employees - {this.state.employees.length}</h1>
                <EmployeeTable employees={this.state.employees} />
                <EmployeeForm  addEmployee={this.addEmployee} />
            </div>
        )
    }
}

export default Employees