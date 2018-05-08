import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.a`
  border-radius: 3px;
  display: block;
  position: relative;
`

const Video = styled.video`
  display: block;
  height: 100%;
  position: relative;
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

    const { className, sizes, style, resolutions, video } = this.props

    return (
      <Container
        className={className}
        onClick={this._open}
        style={style}
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
