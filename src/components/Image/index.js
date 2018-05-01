import React, { Component } from 'react'
import Img from 'gatsby-image'

const Container = styled.a`

`

export default class Image extends Component {

  constructor(props) {
    super(props)
    this._open = this._open.bind(this)
    this.state = {
      isOpen: false
    }
  }

  render() {

    const { sizes, resolutions } = this.props

    return (
      <Container onClick={this._open}>
        <Img
          sizes={sizes}
          resolutions={resolutions}
        />
      </Container>
    )
  }

  _open() {
    this.setState(prevState => ({isOpen: true}))
  }

}
