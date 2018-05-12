import React, { Component } from 'react'
import styled from 'styled-components'

let win = typeof window !== 'undefined' ? window : false

const CometContainer = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.6));
  border-radius: 0 0 50px 50px;
  bottom: ${props => props.isAnimated ? 'calc(50% - 10px)' : '100px'};
  filter: blur(${props => props.isBlurred ? '10px' : 0});
  left: 50%;
  min-height: 200px;
  transform: translateX(-50%);
  transition: height 400ms ease, opacity 800ms ease 400ms, width 400ms ease, -webkit-filter 400ms ease;
  transition: filter 400ms ease, height 400ms ease, opacity 800ms ease 400ms, width 400ms ease;
  transition: filter 400ms ease, height 400ms ease, opacity 800ms ease 400ms, width 400ms ease, -webkit-filter 400ms ease;
  position: ${props => props.isAnimated ? 'fixed' : 'absolute'};
  width: ${props => props.isAnimated ? '10px' : '70px'};
`

const CometArrow = styled.div`
  background-color: ${props => props.isAnimated ? '#fff' : 'transparent'};
  border-radius: ${props => props.isAnimated ? '50%' : 0};
  bottom: ${props => props.isAnimated ? '3px' : '20px'};
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
    width: ${props => props.isAnimated ? '3px' : '25px'};
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

const StyledCanvas = styled.canvas`
  height: 100%;
  width: 100%;
`

class Canvas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      prevPos: win.innerHeight / 2
    }
  }

  componentDidMount() {
    this._initCanvas()

    win.addEventListener('scroll', this._getScrollDirection)
  }

  render() {
    return(
      <StyledCanvas
        height='200'
        innerRef={i => { this.canvas = i }}
        width='70'
      />
    )
  }

  _initCanvas() {
    const ctx = this.canvas.getContext('2d')
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.canvas.width / 2, this.canvas.height / 2 , 35, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = 'rgba(255,255,255,0.6)'
    ctx.fill()
    ctx.restore()
  }

  _getScrollDirection() {

    if (this.state.prevPos < scroll.scrollY) {

    }

  }

}

export default class Comet extends Component {

  constructor(props) {
    super(props)
    this._onScroll = this._onScroll.bind(this)
    this.state = {
      isAnimated: false,
      isBlurred: false,
      scrollPos: 0
    }
  }

  componentDidMount() {
    win.addEventListener('scroll', this._onScroll)
  }

  componentWillUnmount() {
    win.removeEventListener('scroll', this._onScroll)
  }

  render() {

    const { isBlurred } = this.props

    return (
      <React.Fragment>
        <CometContainer
          isAnimated={this.state.isAnimated}
          isBlurred={isBlurred}
        >
          <CometArrow
            isAnimated={this.state.isAnimated}
          />

        </CometContainer>
      </React.Fragment>
    )
  }

  _onScroll() {
    const viewHeight = win.innerHeight
    const middleSection = viewHeight / 2 - 100

    if (win.scrollY > middleSection) {
      this.setState(prevState => ({isAnimated: true}))
    }
    else {
      this.setState(prevState => ({isAnimated: false}))
    }

  }

}
