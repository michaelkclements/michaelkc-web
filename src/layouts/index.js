import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import styled from 'styled-components'

import './index.css'

const Container = styled.div`
`

const TemplateWrapper = ({ children, data }) =>
  <Container>

    <Helmet
      title='_michaelkc'
      meta={[
        { name: 'description', content: 'Michael K. Clements' },
        { name: 'keywords', content: 'michaelkc, michaelkc portfolio' },
      ]}
    />

    {children()}

  </Container>

export default TemplateWrapper
