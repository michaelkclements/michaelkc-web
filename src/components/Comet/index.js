import React, { Component } from 'react'
import styled from 'styled-components'

const CometContainer = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.6));
  border-radius: 0 0 50px 50px;
  bottom: ${props => props.isAnimated ? 'calc(50% - 10px)' : '100px'};
  filter: blur(${props => props.isBlurred ? '10px' : 0});
  height: ${props => props.isAnimated ? '30%' : '20%'};
  left: 50%;
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
  bottom: ${props => props.isAnimated ? '20px' : '3px'};
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
    window.addEventListener('scroll', this._onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll)
  }

  render() {

    const { isAnimated, isBlurred } = this.props

    return (
      <CometContainer
        isAnimated={isAnimated}
        isBlurred={isBlurred}
      >
        <CometArrow isAnimated={isAnimated} />
      </CometContainer>
    )
  }

  _onScroll() {
    const viewHeight = window.innerHeight
    const middleSection = viewHeight / 2 - 100

    if (window.scrollY > middleSection) {
      this.setState(prevState => ({isAnimated: true}))
    }
    else {
      this.setState(prevState => ({isAnimated: false}))
    }

  }

}
