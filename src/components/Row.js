import React from 'react'
import Square from './Square'
import PropTypes from 'prop-types'

const Row = ({ values, offset, updateBoard }) => (
  <div className='row'>
    {values.map((value, index) => (
      <Square
        value={value}
        key={offset + index}
        id={offset + index}
        updateBoard={updateBoard}
      />
    ))}
  </div>
)

Row.propTypes = {
  values: PropTypes.array.isRequired,
  offset: PropTypes.number.isRequired,
  updateBoard: PropTypes.func.isRequired,
}

export default Row
