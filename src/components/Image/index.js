import React, { Component } from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Container = styled.a`
  display: block;
  opacity: 0.5;
  transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: scale(0.96);

  &:hover {
    opacity: 1;
    transform: scale(1);
  }
`

const Video = styled.video`
  display: block;
  height: auto;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgba(255, 121, 121, 1);
  }
`

export default class Image extends Component {

  constructor(props) {
    super(props)
    this._open = this._open.bind(this)
    this.container = React.createRef()
    this.state = {
      isOpen: false
    }
  }

  render() {

    const { className, fluid, style, resolutions, to, video } = this.props

    return (
      <Container
        className={className}
        href={to}
        ref={this.container}
        onClick={this._open}
        style={style}
        target='_blank'
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
          : <GatsbyImage
              fluid={fluid}
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
