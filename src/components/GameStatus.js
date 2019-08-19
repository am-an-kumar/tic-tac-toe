import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const GameStatus = ({ winner, restartGame }) => (
  <div id='game-status'>
    {winner ? (
      <Fragment>
        <p>Player {winner} won</p>
        <button onClick={restartGame}>Restart Game</button>
      </Fragment>
    ) : null}
  </div>
)

GameStatus.propTypes = {
  winner: PropTypes.any,
  restartGame: PropTypes.func.isRequired,
}

export default GameStatus
