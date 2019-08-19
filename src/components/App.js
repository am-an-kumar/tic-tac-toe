import React from 'react'
import { hot } from 'react-hot-loader'
import Game from './Game'

const App = () => <Game />

// this component and its children will be hot module replaced instead of a full page refresh
export default hot(module)(App)
