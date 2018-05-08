import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.a`
  display: block;
  height: 269px;
  overflow: hidden;
  position: relative;
  width: 100%;
`

const Video = styled.video`
  border-radius: 3px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
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

    const { className, sizes, resolutions, video } = this.props

    return (
      <Container
        className={className}
        onClick={this._open}
      >
        {
          video
          ? <Video
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video} />
            </Video>
          : <Img
              sizes={sizes}
              resolutions={resolutions}
              style={{display: 'block'}}
            />
        }
      </Container>
    )
  }

  _open() {
    this.setState(prevState => ({isOpen: true}))
  }

}
