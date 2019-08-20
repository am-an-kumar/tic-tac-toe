import React from 'react'
import PropTypes from 'prop-types'

const RevertLastMove = ({ revertLastMove, isDisabled, moveCount }) => (
  <button
    className='btn'
    id='revert-btn'
    onClick={revertLastMove}
    disabled={isDisabled || moveCount === 9}
  >
    Revert Last Move
  </button>
)

RevertLastMove.propTypes = {
  revertLastMove: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  moveCount: PropTypes.number.isRequired,
}

export default RevertLastMove
