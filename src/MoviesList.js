import React from 'react'
import PropTypes from 'prop-types' //npm install prop-types

function MoviesList(props) {
    return (
        <ul>
            { props.movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        {movie.name}
                        <button onClick={() => {
                            props.handleRemove(movie.id)
                        }}> remove </button>
                    </li>
                )
            })}
        </ul>
    )
}

MoviesList.propTypes = { //propTypes is a property from 
    movies: PropTypes.array.isRequired, //validation given by PropTypes pacakge
    handleRemove: PropTypes.func.isRequired
}

export default MoviesList