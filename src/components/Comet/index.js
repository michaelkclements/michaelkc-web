import React, { Component } from 'react'
import styled from 'styled-components'

let win = typeof window !== 'undefined' ? window : false

const CometContainer = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.6));
  border-radius: 0 0 50px 50px;
  bottom: ${props => (props.isAnimated ? 'calc(50% - 10px)' : '100px')};
  filter: blur(${props => (props.isBlurred ? '10px' : 0)});
  left: 50%;
  height: ${props => (props.isExploded ? '10px' : 'auto')};
  min-height: 200px;
  opacity: ${props => (props.isExploded ? 0 : 1)};
  transform: translateX(-50%);
  transition: height 400ms ease, opacity 800ms ease 400ms, width 400ms ease,
    -webkit-filter 400ms ease;
  position: ${props => (props.isAnimated ? 'fixed' : 'absolute')};
  width: ${props => (props.isAnimated ? '10px' : '70px')};
`

const CometArrow = styled.div`
  background-color: ${props => (props.isAnimated ? '#fff' : 'transparent')};
  border-radius: ${props => (props.isAnimated ? '50%' : 0)};
  bottom: ${props => (props.isAnimated ? '3px' : '20px')};
  left: 50%;
  height: 4px;
  position: absolute;
  transform: translateX(-50%);
  transition: all 300ms ease;
  width: 4px;

  &:before,
  &:after {
    background-color: #fff;
    border-radius: 10px;
    bottom: 0;
    content: '';
    height: 3px;
    position: absolute;
    transition: all 300ms ease;
    width: ${props => (props.isAnimated ? '3px' : '25px')};
  }

  &:before {
    right: 0%;
    transform: rotateZ(42deg);
    transform-origin: 100% 0%;
  }

  &:after {
    left: 0%;
    transform: rotateZ(-42deg);
    transform-origin: 0% 0%;
  }
`

export default class Comet extends Component {
  constructor(props) {
    super(props)
    this._onScroll = this._onScroll.bind(this)
    this.state = {
      isAnimated: false,
      isBlurred: false,
      scrollPos: 0,
    }
  }

  componentDidMount() {
    win.addEventListener('scroll', this._onScroll)
  }

  componentWillUnmount() {
    win.removeEventListener('scroll', this._onScroll)
  }

  render() {
    const { isBlurred, isCometExploded } = this.props

    return (
      <>
        <CometContainer
          isAnimated={this.state.isAnimated}
          isBlurred={isBlurred}
          isExploded={isCometExploded}
        >
          <CometArrow isAnimated={this.state.isAnimated} />
        </CometContainer>
      </>
    )
  }

  _onScroll() {
    const viewHeight = win.innerHeight
    const middleSection = viewHeight / 2 - 100

    if (win.scrollY > middleSection) {
      this.setState({ isAnimated: true })
    } else {
      this.setState({ isAnimated: false })
    }
  }
}
