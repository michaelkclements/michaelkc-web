import React, { Component } from 'react'
import styled from 'styled-components'

let win = typeof window !== 'undefined' ? window : false

const Container = styled.div`
  color: #fff;
  font-size: ${props => props.isScrolled ? '4rem' : '8.5rem'};
  font-weight: 900;
  text-align: center;
  transition: all 500ms ease;

  left: 50%;
  position: fixed;
  top: ${props => props.isScrolled ? '100px' : `${win.innerHeight /2}px`};
  transform: translate3d(-50%, -50%, 0);
  z-index: 1;
`

export default class Logo extends Component {

  constructor(props) {
    super(props)
    this._onScroll = this._onScroll.bind(this)
    this.state = {
      isScrolled: false
    }
  }

  componentDidMount() {
    win.addEventListener('scroll', this._onScroll)
    this.setState(prevState => ({lastScroll: 0, top: win.innerHeight / 2}))
  }

  componentWillUnmount() {
    win.removeEventListener('scroll', this._onScroll)
  }

  render() {

    return(
      <Container
        isScrolled={this.state.isScrolled}
        // style={{top: this.state.top}}
      >
        MKC
      </Container>
    )
  }

  _onScroll() {
    win.scrollY > 0
    ? this.setState(prevState => ({isScrolled: true}))
    : this.setState(prevState => ({isScrolled: false}))

    const end = 100

    if (win.scrollY > this.state.lastScroll) {
      this.setState(prevState => ({lastScroll: win.scrollY, top: prevState.top--}))
    }
    else {
      this.setState(prevState => ({lastScroll: win.scrollY, top: prevState.top++}))
    }

  }

}
