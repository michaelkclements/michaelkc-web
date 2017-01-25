

import React, { Component } from 'react'
import classnames from 'classnames'

import CometStore from '../../stores/CometStore'
import ExplosionStore from '../../stores/ExplosionStore'

import { startAnimateComet, stopAnimateComet, setPositionComet } from '../../actions/Actions'

let win = typeof window !== 'undefined' ? window : false

export default class Comet extends Component {

  constructor(props) {
    super(props)
    this._onScroll = this._onScroll.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = CometStore.getAnimated()
  }

  componentDidMount() {
    this.setState({isExploded: ExplosionStore.getExploded().isExploded})
    
    CometStore.addChangeListener(this._onChange)

    if (win) {
      win.addEventListener('scroll', this._onScroll)
    }
  }

  componentWillUnmount() {
    CometStore.removeChangeListener(this._onChange)

    if (win) {
      win.removeEventListener('scroll', this._onScroll)
    }
  }

  render() {

    let cometClass = classnames({
      'comet': true,
      'animate': this.state.isAnimated,
      'blur': this.state.isBlurred,
      'crashed': this.state.isExploded
    })

    return (
      <div className={cometClass}>
        <div className='comet-arrow'></div>
      </div>
    )
  }

  _onChange() {
    this.setState(CometStore.getAnimated())
    this.setState({isExploded: ExplosionStore.getExploded().isExploded})
  }

  _onScroll() {
    let viewHeight = window.innerHeight
    let middleSection = viewHeight / 2 - 100

    setPositionComet(CometStore.getAnimated(window.scrollY))
    CometStore.getAnimated().scrollPos = window.scrollY

    if (CometStore.getAnimated().scrollPos > middleSection) {
      startAnimateComet(CometStore.getAnimated())
    }
    else {
      stopAnimateComet(CometStore.getAnimated())
    }

  }

}

Comet.propTypes = {
  animated: React.PropTypes.bool,
  blur: React.PropTypes.bool,
  scrollPos: React.PropTypes.number
}
