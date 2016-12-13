import React, { Component } from 'react'
import classnames from 'classnames'
import { SVGIcon } from '../'

import ExplosionStore from '../../stores/ExplosionStore'
import { explode } from '../../actions/Actions'

let win = typeof window !== 'undefined' ? window : false

class Explosion extends Component {

  constructor(props) {
    super(props)
    this._onScroll = this._onScroll.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = ExplosionStore.getExploded()
  }

  componentDidMount() {
    ExplosionStore.addChangeListener(this._onChange)

    if (win) {
      win.addEventListener('scroll', this._onScroll)
    }
  }

  componentWillUnmount() {
    ExplosionStore.removeChangeListener(this._onChange)

    if (win) {
      win.removeEventListener('scroll', this._onScroll)
    }
  }

  render() {

    let explosionClass = classnames({
      'explosion': true,
      'animate': this.state.isExploded
    })

    return (
      <div className={explosionClass}></div>
    )
  }

  _onChange() {
    this.setState(ExplosionStore.getExploded())
  }

  _onScroll() {
    let viewHeight = window.innerHeight
    let pageHeight = document.body.clientHeight
    let endHeight = pageHeight - viewHeight

    if (window.scrollY >= endHeight) {
      explode(ExplosionStore.getExploded())
    }

  }

}


export default class Footer extends Component {

  render() {

    return (
      <footer>
        <div className='created'>
          <div className='icon-container'>
            <SVGIcon viewBox='0 0 32 28.8' icon='sketch'></SVGIcon>
            <SVGIcon viewBox='0 0 32 32' icon='sass'></SVGIcon>
            <SVGIcon viewBox='0 0 32 12.2' icon='babel'></SVGIcon>
            <SVGIcon viewBox='0 0 32 32' icon='react'></SVGIcon>
          </div>
        </div>
        <Explosion />
      </footer>
    )
  }

}
