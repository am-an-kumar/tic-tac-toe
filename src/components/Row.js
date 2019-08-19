import React from 'react'
import Square from './Square'
import PropTypes from 'prop-types'

const Row = ({ indices }) => (
  <div className='row'>
    {indices.map(value => (
      <Square value={value} key={value} />
    ))}
  </div>
)

Row.propTypes = {
  indices: PropTypes.array.isRequired,
}

export default Row
