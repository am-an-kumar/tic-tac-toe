import React from 'react'
import Row from './Row'

const Board = () => (
  <div id='board'>
    <Row indices={[1, 2, 3]} />
    <Row indices={[4, 5, 6]} />
    <Row indices={[7, 8, 9]} />
  </div>
)

export default Board
