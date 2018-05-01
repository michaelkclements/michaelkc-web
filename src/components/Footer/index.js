import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  align-items: center;
  bottom: 0;
  content: '';
  display: flex;
  height: 50vh;
  left: 0;
  justify-content: center;
  overflow: hidden;
  padding: 20px 0;
  position: absolute;
  width: 100%;
  z-index: -1;

  &:before {
    background-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%);
    content: '';
    height: 2px;
    left: 40%;
    position: absolute;
    right: 40%;
    top: 0;
  }
`

const Created = styled.div`
  text-align: center;
`

const IconContainer = styled.div`
  align-self: center;
  display: flex;

  svg {
    height: 45px;
    margin: 10px;
    width: auto;
  }
`

export default () =>
  <Container>
    <Created>
      <IconContainer>

      </IconContainer>
    </Created>
  </Container>
