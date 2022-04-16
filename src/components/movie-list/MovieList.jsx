import React from 'react'
import PropTypes from 'prop-types'

import "./movie-list.scss";

const MovieList = props => {
  return (
    <div>
    MovieList
    
    </div>
  )
}

MovieList.propTypes = {
category: PropTypes.string.isRequired,
type: PropTypes.string.isRequired
}

export default MovieList