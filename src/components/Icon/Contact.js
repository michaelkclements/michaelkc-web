import React, { Component } from 'react'
import classnames from 'classnames'
import SVGIcon from './SVG'

export default class ContactIcon extends Component {
  render() {

    const socialClass = classnames({
      'social-icon': true,
      [`${this.props.className}`]: this.props.className,
      [`${this.props.icon}`]: this.props.icon,
    })

    return (
      <a href={this.props.href} className={socialClass} target='_blank'>
        <SVGIcon {...this.props}></SVGIcon>
      </a>
    )
  }
}

ContactIcon.propTypes = {
  icon: React.PropTypes.string,
  href: React.PropTypes.string
}
