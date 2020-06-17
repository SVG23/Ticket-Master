import React from 'react'
import pt from 'prop-types'

function EmployeeTable(props) {
    return (
        <table border="1px">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {
                props.employees.map(function(emp) {
                    return (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.gender}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}

EmployeeTable.propTypes = {
    employees: pt.array.isRequired
}

export default EmployeeTable