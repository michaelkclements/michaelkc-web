import React, { Component } from 'react'
import styled from 'styled-components'

let win = typeof window !== 'undefined' ? window : false

const Container = styled.section`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  max-width: 1100px;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  padding: ${props => (props.isPadded ? '100px 0' : 0)};
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateY(${props => (props.isVisible ? 0 : '100px')});
  width: 100%;

  @media (min-width: 737px) {
    flex-direction: row;

    > div:first-child {
      padding-right: 2rem;
    }

    > div:last-child {
      padding-left: 2rem;
    }

    &:nth-of-type(odd) {
      flex-direction: row-reverse;

      > div:first-child {
        padding-left: 2rem;
      }

      > div:last-child {
        padding-right: 2rem;
      }
    }
  }
`

export default class Section extends Component {
  constructor(props) {
    super(props)
    this._onScroll = this._onScroll.bind(this)
    this.section = React.createRef()
    this.state = {
      isVisible: false,
    }
  }

  componentDidMount() {
    win.addEventListener('scroll', this._onScroll)
    this._onScroll()
  }

  componentWillUnmount() {
    win.removeEventListener('scroll', this._onScroll)
  }

  render() {
    const { backgroundColor, children, className, isPadded, style } = this.props

    return (
      <Container
        backgroundColor={backgroundColor}
        className={className}
        ref={this.section}
        isPadded={isPadded}
        isVisible={this.state.isVisible}
        style={style}
      >
        {children}
      </Container>
    )
  }

  _onScroll() {
    const centerHeight = win.innerHeight
    const sectionTop = this.section.current.getBoundingClientRect().top

    if (sectionTop <= centerHeight) {
      this.setState(prevState => ({ isVisible: true }))
    }
  }
}
