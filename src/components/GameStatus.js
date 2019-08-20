import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const GameStatus = ({ winner, restartGame, moveCount }) => (
  <div id='game-status'>
    {winner || moveCount === 9 ? (
      <Fragment>
        {winner ? <p>Player {winner} won</p> : <p>Game Drawn</p>}
        <button onClick={restartGame}>Restart Game</button>
      </Fragment>
    ) : null}
  </div>
)

GameStatus.propTypes = {
  winner: PropTypes.any,
  restartGame: PropTypes.func.isRequired,
  moveCount: PropTypes.number.isRequired,
}

export default GameStatus
