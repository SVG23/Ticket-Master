import React from 'react'

function TaskTable(props) {
    return (
        <div>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Title</th>
                        <th>Created On</th>
                        <th>Due Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((task) => {
                            return (
                                <tr key={task.id}>
                                    <td><input type="checkbox" /></td>
                                    <td>{task.title}</td>
                                    <td>{task.createdAt}</td>
                                    <td>{task.dueDate}</td>
                                    <td>
                                        <button>Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TaskTable