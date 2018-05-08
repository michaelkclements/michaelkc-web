import React, { Component } from 'react'

export default class HTML extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css'),
          }}
        />
      )
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link rel="shortcut icon" href={__PATH_PREFIX__ + '/favicon.png'} />
          <link rel="apple-touch-icon-precomposed" href={__PATH_PREFIX__ + '/touch-icon-144.png'} sizes="144x144" />
          <link rel="apple-touch-icon-precomposed" href={__PATH_PREFIX__ + '/touch-icon-114.png'} sizes="114x114" />
          <link rel="apple-touch-icon-precomposed" href={__PATH_PREFIX__ + '/touch-icon-72.png'} sizes="72x72" />
          <link rel="apple-touch-icon-precomposed" href={__PATH_PREFIX__ + '/touch-icon-57.png'} />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
