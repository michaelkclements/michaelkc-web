import React, { Component } from 'react'
import classnames from 'classnames'
import ImageStore from '../../stores/ImageStore'
import CometStore from '../../stores/CometStore'
import { closeImage, unblurComet } from '../../actions/Actions'

export default class ImageView extends Component {

  constructor(props) {
    super(props)
    this._close = this._close.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = ImageStore.getVisibility()
  }

  render() {

    let imageViewClass = classnames({
      'image-view': true,
      'visible': this.state.isVisible
    })

    let src = './images/work-' + this.state.image + '.jpg'

    return (
      <div onClick={this._close} className={imageViewClass}>
        <a className='image' href={this.state.url} target="_blank">
          <img src={src} role='presentation'/>
        </a>
        <div className='text'>
          <h1><a href={this.state.url} target="_blank">{this.state.title}</a></h1>
          <p>{this.state.text}</p>
        </div>
        <div className='close' onClick={this._close}></div>
      </div>
    )
  }

  _onChange() {
    this.setState(ImageStore.getVisibility())
  }

  _close() {
    closeImage(ImageStore.getVisibility())
    unblurComet(CometStore.getAnimated())
  }

}

ImageView.propTypes = {
  image: React.PropTypes.object,
  viewable: React.PropTypes.bool,
  title: React.PropTypes.string,
  text: React.PropTypes.string
}
