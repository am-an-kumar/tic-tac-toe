import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value || 0,
      checked: false,
    }
  }

  checkSquare = () => {
    this.setState({
      checked: true,
    })
  }

  render() {
    const { value, checked } = this.state
    return (
      <button className='square' onClick={this.checkSquare}>
        {checked ? 'X' : value}
      </button>
    )
  }
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Square
