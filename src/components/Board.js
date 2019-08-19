import React, { Component } from 'react'
import Row from './Row'

class Board extends Component {
  state = {
    values: Array(9).fill(null),
  }

  render() {
    const { values } = this.state
    const offsets = [0, 3, 6]

    return (
      <div id='board'>
        {offsets.map((offset, index) => (
          <Row
            offset={offset}
            values={values.slice(offset, offset + 3)}
            key={index}
          />
        ))}
      </div>
    )
  }
}

export default Board
