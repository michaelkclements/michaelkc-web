import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  align-items: flex-end;
  display: flex;
  height: 50vh;
  justify-content: center;
  overflow: hidden;
  padding: 100px;
  position: relative;
  width: 100%;

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

const Explosion = styled.div`
  border: 300px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  height: 100vw;
  position: absolute;
  left: 50%;
  top: 0;
  transform: ${props => props.isExploded ? 'translate3d(-50%, -50%, 0) scale(8)' : 'translate3d(-50%, -50%, 0) scale(0.001) rotateX(60deg)'};
  transition: all 1s cubic-bezier(0.36, 0, 0.76, 0.51);
  width: 100vw;
`

export default ({ children, isCometExploded }) =>
<Container>
  <Explosion isExploded={isCometExploded} />
  <Created>
    <IconContainer>
      {children}
    </IconContainer>
  </Created>
</Container>
