import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ value, id, updateBoard }) => (
  <button className='square' index={id} onClick={() => updateBoard(id)}>
    {value}
  </button>
)

Square.propTypes = {
  value: PropTypes.number,
  id: PropTypes.number.isRequired,
  updateBoard: PropTypes.func.isRequired,
}

export default Square
