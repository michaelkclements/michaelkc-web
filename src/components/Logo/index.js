import React, { Component } from 'react'
import styled from 'styled-components'

let win = typeof window !== 'undefined' ? window : false

const Container = styled.div`
  color: #fff;
  font-size: ${props => props.isScrolled ? '4rem' : '8.5rem'};
  font-weight: 900;
  left: 50%;
  position: fixed;
  text-align: center;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1;
`

export default class Logo extends Component {

  constructor(props) {
    super(props)
    this._onScroll = this._onScroll.bind(this)
    this.state = {
      isScrolled: false,
      topPosition: win.innerHeight / 2
    }
  }

  componentDidMount() {
    win.addEventListener('scroll', this._onScroll)

  }

  componentWillUnmount() {
    win.removeEventListener('scroll', this._onScroll)
  }

  render() {

    return(
      <Container
        isScrolled={this.state.isScrolled}
        style={{top: this.state.topPosition, fontSize: this.state.fontSize}}
      >
        MKC
      </Container>
    )
  }

  _onScroll() {
    const scrollPercent = win.scrollY / win.innerHeight
		const topPosition = (win.innerHeight / 2) - (win.scrollY / 1.5)
    const fontSize = 8.5 - (scrollPercent * 4)

		scrollPercent <= 1
			?	this.setState(prevState => ({topPosition: topPosition, fontSize: `${fontSize}rem`}))
			: this.setState(prevState => ({topPosition: win.innerHeight / 2, fontSize: '4rem'}))
  }

}
