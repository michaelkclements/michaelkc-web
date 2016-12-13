import React, { Component } from 'react'
import { SVGIcon } from '../components'

export default class Tech extends Component {

  render() {
    return (
      <section className='section' id='tech'>
        <div className='col'>
          <div className='icons'>
            <div className='icons-col'>
              <SVGIcon viewBox='0 0 16 32' icon='iphone'></SVGIcon>
              <SVGIcon viewBox='0 0 22.07 32' icon='ipad'></SVGIcon>
              <SVGIcon viewBox='0 0 32 16.73' icon='macbook'></SVGIcon>
            </div>
            <div className='icons-col'>
              <SVGIcon viewBox='0 0 32 28.8' icon='sketch'></SVGIcon>
              <SVGIcon viewBox='0 0 32 32' icon='craft'></SVGIcon>
              <SVGIcon viewBox='0 0 32 31.47' icon='photoshop'></SVGIcon>
              <SVGIcon viewBox='0 0 32 31.47' icon='ai'></SVGIcon>
              <SVGIcon viewBox='0 0 32 32' icon='css'></SVGIcon>
              <SVGIcon viewBox='0 0 32 32' icon='sass'></SVGIcon>
              <SVGIcon viewBox='0 0 32 32' icon='js'></SVGIcon>
              <SVGIcon viewBox='0 0 32 32' icon='react'></SVGIcon>
              <SVGIcon viewBox='0 0 27.83 32' icon='bitbucket'></SVGIcon>
              <SVGIcon viewBox='0 0 32 30.93' icon='github'></SVGIcon>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='text'>
            <h1>
              Aussie born,
              Geordie raised
              Technology
              enthusiast
            </h1>
            <p>Whether it’s new hardware or software, I’m always intrigued by it and love trying to see if it improves my work process.</p>
          </div>
        </div>
      </section>
    )
  }

}
