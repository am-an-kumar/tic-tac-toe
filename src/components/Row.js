import React from 'react'
import Square from './Square'
import PropTypes from 'prop-types'

const Row = ({ values, offset }) => (
  <div className='row'>
    {values.map((value, index) => (
      <Square value={value} key={offset + index} id={offset + index} />
    ))}
  </div>
)

Row.propTypes = {
  values: PropTypes.array.isRequired,
  offset: PropTypes.number.isRequired,
}

export default Row
