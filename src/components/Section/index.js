import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  max-width: 940px;
  opacity: ${props => props.isVisible ? 1 : 0};
  padding: ${props => props.isPadded ? '100px 0' : 0};
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
`

export default class Section extends Component {

  constructor(props) {
    super(props)
    this._onScroll = this._onScroll.bind(this)
    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll)
    this._onScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll)
  }

  render() {

    const { backgroundColor, children, className, isPadded, style } = this.props

    return(
      <Container
        backgroundColor={backgroundColor}
        className={className}
        innerRef={(el) => this.section = el}
        isPadded={isPadded}
        isVisible={this.state.isVisible}
        style={style}
      >
        {children}
      </Container>
    )

  }

  _onScroll() {
    const centerHeight = window.innerHeight / 2
    const sectionTop = this.section.getBoundingClientRect().top

    if (sectionTop <= centerHeight) {
      this.setState(prevState => ({isVisible: true}))
    }
  }
}
