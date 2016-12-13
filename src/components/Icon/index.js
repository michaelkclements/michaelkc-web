import React, { Component } from 'react'
import classnames from 'classnames'

export class SVGIcon extends React.Component {

  render() {

    var href = './images/icons/icons.svg#' + this.props.icon

    return (
      <svg className="icon" {...this.props}>
        <use xlinkHref={href}></use>
      </svg>
    )
  }

}

SVGIcon.propTypes = {
  icon: React.PropTypes.string
}

export class ContactIcon extends Component {
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
