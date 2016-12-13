import React, { Component } from 'react'
import ImageStore from '../../stores/ImageStore'
import CometStore from '../../stores/CometStore'
import { openImage, blurComet } from '../../actions/Actions'

export default class Image extends Component {

  constructor(props) {
    super(props)
    this._open = this._open.bind(this)
    this.state = ImageStore.getVisibility()
  }

  render() {

    let src = './images/work-' + this.props.image + '.jpg'
    let classnames = 'image ' + this.props.image

    return (
      <a onClick={this._open} className={classnames}>
        <img src={src} role='presentation'/>
      </a>
    )
  }

  _onChange() {
    this.setState(ImageStore.getVisibility())
  }

  _open() {
    ImageStore.getVisibility().title = this.props.title
    ImageStore.getVisibility().text = this.props.text
    ImageStore.getVisibility().image = this.props.image
    ImageStore.getVisibility().url = this.props.url
    blurComet(CometStore.getAnimated())
    openImage(ImageStore.getVisibility())
  }

}

Image.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  url: React.PropTypes.string
}
