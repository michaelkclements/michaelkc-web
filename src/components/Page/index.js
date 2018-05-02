import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export default ({children}) =>
  <Container>
    {children}
  </Container>
