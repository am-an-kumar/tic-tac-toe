import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ value, id }) => (
  <button className='square' index={id}>
    {value}
  </button>
)

Square.propTypes = {
  value: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}

export default Square
