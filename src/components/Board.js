import React, { Component } from 'react'
import Row from './Row'

class Board extends Component {
  state = {
    values: Array(9).fill(null),
    xIsNext: true,
  }

  updateBoard = squareNumber => {
    this.setState(prevState => {
      return {
        values: prevState.values.map((value, index) => {
          return index === squareNumber && value == null
            ? prevState.xIsNext
              ? 'X'
              : 'O'
            : value
        }),
        xIsNext:
          prevState.values[squareNumber] == null
            ? !prevState.xIsNext
            : prevState.xIsNext,
      }
    })
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
            updateBoard={this.updateBoard}
          />
        ))}
      </div>
    )
  }
}

export default Board
