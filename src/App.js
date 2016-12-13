import React, { Component } from 'react'
import {
  Intro,
  Work,
  Tech,
  Contact,
  End
} from './sections'
import { Comet } from './components'

export default class MkcApp extends Component {

  render() {
    return (
      <div>
        <Intro />
        <Work />
        <Tech />
        <Contact />
        <End />
        <Comet />
      </div>
    )
  }

}
