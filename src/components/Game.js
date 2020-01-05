import React, { Component } from 'react'
import Board from './Board'
import NextPlayer from './NextPlayer'
import GameStatus from './GameStatus'
import RevertLastMove from './RevertLastMove'

class Game extends Component {
  state = {
    values: Array(9).fill(null),
    xIsNext: true,
    history: [Array(9).fill(null)],
    moveCount: 0,
  }

  revertLastMove = () => {
    this.setState(prevState => {
      if (prevState.history.length === 1) {
        return prevState
      } else {
        return {
          values: prevState.history[prevState.history.length - 2],
          history: prevState.history.slice(0, prevState.history.length - 1),
          xIsNext: !prevState.xIsNext,
          moveCount: prevState.moveCount - 1,
        }
      }
    })
  }

  updateBoard = squareNumber => {
    this.setState(prevState => {
      const values = prevState.values.map((value, index) => {
        return index === squareNumber && value == null
          ? prevState.xIsNext
            ? 'X'
            : 'O'
          : value
      })
      return {
        values,
        xIsNext:
          prevState.values[squareNumber] == null
            ? !prevState.xIsNext
            : prevState.xIsNext,
        history:
          prevState.values[squareNumber] == null
            ? [...prevState.history, values]
            : prevState.history,
        moveCount:
          prevState.values[squareNumber] == null
            ? prevState.moveCount + 1
            : prevState.moveCount,
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
      history: [Array(9).fill(null)],
      moveCount: 0,
    })
  }

  render() {
    const { values, xIsNext, history, moveCount } = this.state
    const offsets = [0, 3, 6]
    const winner = history.length === 1 ? null : this.calculateWinner(values)
    const isDisabled = history.length === 1 || winner != null

    return (
      <div id='game'>
        <NextPlayer xIsNext={xIsNext} />
        <Board
          offsets={offsets}
          values={values}
          updateBoard={this.updateBoard}
        />
        <RevertLastMove
          revertLastMove={this.revertLastMove}
          isDisabled={isDisabled}
          moveCount={moveCount}
        />
        <GameStatus
          moveCount={moveCount}
          winner={winner}
          restartGame={this.restartGame}
        />
      </div>
    )
  }
}

export default Game
