import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const GameStatus = ({ winner, restartGame, moveCount }) => (
  <div id='game-status'>
    {winner || moveCount === 9 ? (
      <Fragment>
        {<p>{winner ? `Player ${winner} won` : `Game Drawn`}</p>}
        <button onClick={restartGame} className='btn'>
          Restart Game
        </button>
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
