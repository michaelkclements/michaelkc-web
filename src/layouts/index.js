import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Comet } from '../components'

import './index.css'

const Container = styled.div`
  background-image: linear-gradient(10deg, #37D7FF 0%, #904FFA 20%, #FF50A2 40%, #FA7654 60%, #ED4A4A 80%, #fe9a65 100%);
  min-height: 500vh;
`

const TemplateWrapper = ({ children, data }) =>
  <Container>

    <Helmet
      title='_michaelkc'
      meta={[
        { name: 'description', content: 'Michael K. Clements' },
        { name: 'keywords', content: 'michaelkc, michaelkc portfolio, _michaelkc' }
      ]}
    />

    {children()}

    <Comet />

  </Container>

export default TemplateWrapper
