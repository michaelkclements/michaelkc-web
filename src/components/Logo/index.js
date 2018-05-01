import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  align-self: center;
  color: #fff;
  display: inline-block;
  font-family: 'Raleway';
  font-size: 148px;
  font-weight: 900;
  justify-content: center;
  line-height: 150px;
  padding: 0 20px 0 15px;
  text-align: center;

  @media only screen and (max-width: 736px) {
    font-size: 120px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`

export default ({ data }) =>
  <Logo>MKC</Logo>
