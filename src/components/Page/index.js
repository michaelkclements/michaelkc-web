import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export default ({ children }) => <Container>{children}</Container>
