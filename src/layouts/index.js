import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Page } from '../components'

import './index.css'
import OgImage from '../static/og.jpg'
import Favicon from '../static/favicon.png'
import TouchIcon144 from '../static/touch-icon-144.png'
import TouchIcon114 from '../static/touch-icon-114.png'
import TouchIcon72 from '../static/touch-icon-72.png'
import TouchIcon57 from '../static/touch-icon-57.png'

const Container = styled.div`
  background-image: linear-gradient(-170deg,#FFD677 0%,#FF7979 10%,#ed4a59 40%,#FF50A2 60%,#c560ff 80%,#3090bd 100%);
  min-height: 400vh;
`

const TemplateWrapper = ({ children, data }) =>
  <Container>

    <Helmet
      title='_michaelkc'
      meta={[
        { name: 'description', content: 'Portolio created by Michael K. Clements, made with React, Gatsby, GraphQL, Styled Components and Netlify.' },
        { name: 'keywords', content: 'michaelkc, michaelkc portfolio, _michaelkc' },
        { property: 'og:image', content: OgImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '600' },
        { property: 'og:title', content: 'michaelkc.com' },
        { property: 'og:description', content: 'Portolio created by Michael K. Clements, made with React, Gatsby, GraphQL, Styled Components and Netlify.' },
        { property: 'og:url', content: 'https://michaelkc.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'https://michaelkc.com' },
        { name: 'twitter:creator', content: '@_michaelkc' }
      ]}
    >
      <link rel="shortcut icon" href={Favicon} />
      <link rel="apple-touch-icon-precomposed" href={TouchIcon144} sizes="144x144" />
      <link rel="apple-touch-icon-precomposed" href={TouchIcon114} sizes="114x114" />
      <link rel="apple-touch-icon-precomposed" href={TouchIcon72} sizes="72x72" />
      <link rel="apple-touch-icon-precomposed" href={TouchIcon57} />
    </Helmet>

    <Page>
      {children()}
    </Page>

  </Container>

export default TemplateWrapper
