import React, { Component } from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const Container = styled.div`
  align-items: center;
  display: flex;
  left: 0;
  height: 100%;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  padding-left: 300px;
  padding-right: 50px;
  pointer-events: ${props => (props.isOpen ? 'all' : 'none')};
  position: absolute;
  top: 50%;
  transform: ${props => (props.isOpen ? 'translate3d(0, -50%, 0)' : 'translate3d(0, -50%, 200px)')};
  transition: all 300ms ease;
  width: 100%;
`

const ImageLink = styled.a`
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 250px;

  img {
    border-radius: 4px;
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`

const Text = styled.div``

const Close = styled.div`
  color: #fff;
  cursor: pointer;
  left: 50%;
  padding: 20px;
  position: absolute;
  top: 80%;
  transform: translate3d(-50%, -50%, 0);

  &:before,
  &:after {
    background-color: #fff;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    transform-origin: center;
    width: 100%;
  }

  &:before {
    transform: rotateZ(45deg);
  }

  &:after {
    transform: rotateZ(-45deg);
  }
`

export default class ImageView extends Component {
  constructor(props) {
    super(props)
    this._close = this._close.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { fluid, text, title, resolutions, url } = this.props

    return (
      <Container onClick={this._close}>
        <ImageLink href={url} target='_blank' rel='noopener noreferrer'>
          <GatsbyImage fluid={fluid} resolutions={resolutions} />
        </ImageLink>
        <Text>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
          <p>{text}</p>
        </Text>
        <Close onClick={this._close} />
      </Container>
    )
  }

  _close() {
    this.setState(prevState => ({ isOpen: false }))
  }
}
