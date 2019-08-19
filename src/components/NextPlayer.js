import React from 'react'
import PropTypes from 'prop-types'

const NextPlayer = ({ xIsNext }) => (
  <p id='player-name'>Next Player: {xIsNext ? 'X' : 'O'}</p>
)

NextPlayer.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
}

export default NextPlayer
