import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const Board = ({ offsets, values, updateBoard }) => (
  <div id='board'>
    {offsets.map((offset, index) => (
      <Row
        offset={offset}
        values={values.slice(offset, offset + 3)}
        key={index}
        updateBoard={updateBoard}
      />
    ))}
  </div>
)

Board.propTypes = {
  offsets: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
  updateBoard: PropTypes.func.isRequired,
}

export default Board
