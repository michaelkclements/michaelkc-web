import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Comet } from '../components'

import './index.css'

const Container = styled.div`
  background-image: linear-gradient(-170deg,#FFD677 0%,#FF7979 10%,#ed4a59 40%,#FF50A2 60%,#c560ff 80%,#ad8de0 100%);
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
