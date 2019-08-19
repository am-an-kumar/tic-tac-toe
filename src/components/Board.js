import React, { Component, Fragment } from 'react'
import Row from './Row'
import NextPlayer from './NextPlayer'
import GameStatus from './GameStatus'

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

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  restartGame = () => {
    this.setState({
      values: Array(9).fill(null),
      xIsNext: true,
    })
  }

  render() {
    const { values, xIsNext } = this.state
    const offsets = [0, 3, 6]
    const winner = this.calculateWinner(values)

    return (
      <Fragment>
        <NextPlayer xIsNext={xIsNext} />
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
        <GameStatus winner={winner} restartGame={this.restartGame} />
      </Fragment>
    )
  }
}

export default Board
