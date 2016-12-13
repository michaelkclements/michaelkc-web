import React, { Component } from 'react'
import classNames from 'classnames'

import { Image, ImageView } from '../components'
import ImageStore from '../stores/ImageStore'

export default class Work extends Component {

  constructor(props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this.state = ImageStore.getVisibility()
  }

  componentDidMount() {
    ImageStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    ImageStore.removeChangeListener(this._onChange)
  }

  render() {

    let sectionViewClass = classNames({
      'section': true,
      'invisible': this.state.isVisible
    })

    let imageViewClass = classNames({
      'image-view': true,
      'visible': this.state.isVisible
    })

    return (
      <section className={sectionViewClass} id='work'>
        <div className='col'>
          <div className='text'>
            <h1>
              Front end,
              <br/>
              User experience,
              Creative
              Developer
            </h1>
            <p>Started off a Designer, now experienced in many aspects of Front End development with a strong belief in great User Experiences.</p>
          </div>
        </div>
        <div className='col'>
          <div className='images'>
            <div className='images-col'>
              <Image image='icecruelty' title='Ice Cruelty' text='An old drawing I created using Photoshop but a one that I`m of proud of anyway. I think I tried to mimick Penny Arcade while drawing it.' url='http://michaelkclements.deviantart.com/art/Ice-Cruelty-179248607'></Image>
              <Image image='litfusefilms' title='Lit Fuse Films' text='This was a group of talented people that made video game videos (Machinima). Being a part of this group taught me how to organise and work in a team. The website shown now is something quick I put together to link to our videos.' url='http://litfusefilms.com'></Image>
            </div>
            <div className='images-col'>
              <div className='row'>
                <div className='images-col'>
                  <Image image='ipaddrawing' title='iPad Pro drawing' text='Not really anything note worthy but it helped diversify the images in this section. Enjoy the smiley face! :D' ></Image>
                </div>
                <div className='images-col'>
                  <Image image='rs' title='Robert Stoneman site' text='Unfortunately haven`t finished this work in progress off just yet. This was another test for Angular 1.x and to try my knowledge at using fullscreen HTML 5 video for the website.' url='http://michaelkc.com/rs'></Image>
                  <Image image='wonderflix' title='Wonderflix.com' text='I put this together for a friend for his Photography. Using Wordpress allowed my friend to update the website easily. His photography is pretty good too!' url='http://wonderflix.com'></Image>
                </div>
              </div>
              <div className='row'>
                <Image image='music' title='MKC Music' text='I created a music player as a side project. I wanted to test myself with getting HTML 5 audio to play, pause, shuffle, repeat and everything you would expect a music player to do.' url='http://michaelkc.com/music'></Image>
              </div>
              <div className='row'>
                <div className='images-col'>
                  <Image image='box' title='A box' text='Started off as a pencil drawing then scanned in and coloured over in Photoshop. Boxes with open shoutie faces is my go to dumb thing to draw.' url='http://michaelkclements.deviantart.com/art/Box-with-it-s-head-open-179249959?q=gallery%3AMichaelkclements%2F26559004&qo=1'></Image>
                  <Image image='axel' title='Axel the robot' text='This was some art I created for an idea a friend and I had for a 2D point and click game. Created using my mind and Photoshop with additional textures from the internets.' url='http://michaelkclements.deviantart.com/art/Axel-the-robot-179250415'></Image>
                </div>
                <div className='images-col'>
                  <Image image='oldmkc' title='Old MichaelKC.com' text='I set out to put my CSS3 3D transform knowledge to the test. Clicking on a link would move the site around in a 3D environment. The use of HTML 5 video was also used to portray a video I created using the Unreal engine.' url='http://michaelkc.com/old'></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ImageView className={imageViewClass}></ImageView>
      </section>
    )
  }

  _onChange() {
    this.setState(ImageStore.getVisibility())
  }

}

Work.propTypes = {
  blurred: React.PropTypes.bool,
  viewable: React.PropTypes.bool
}
