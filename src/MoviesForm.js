import React from 'react'
import pt from 'prop-types'

class MoviesForm extends React.Component {
    constructor() {
        super() 
        this.state = {
            id: '',
            name: '',
            watched: false 
        }
    }

     handleChange = (e) => {
        if (e.target.type == 'checkbox') {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: parseInt(this.state.id),
            name: this.state.name,
            watched: this.state.watched
        }
        this.props.addMovie(formData)

        this.setState({
            id: '',
            name: '',
            watched: false
        })
    }

    render() {
        return (
            <div>
                <h2>Add Movie</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="movieId">id</label>
                    <input
                        type="text"
                        id="movieId"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleChange}
                    /> <br />

                    <label htmlFor="movieName">name</label>
                    <input
                        type="text"
                        id="movieName"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /> <br />

                    <label htmlFor="movieWatched"> watched </label>
                    <input
                        type="checkbox"
                        id="movieWatched"
                        name="watched"
                        value={this.state.watched}
                        checked={this.state.watched}
                        onChange={this.handleChange}
                    /> <br />

                    <input type="submit" value="Add Movie" />
                </form>
            </div> 
        )
    }
}

MoviesForm.propTypes = {
    addMovie: pt.func.isRequired
}

export default MoviesForm