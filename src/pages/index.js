import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Section, Logo } from '../components'

const Cols = styled.div`
  display: flex;
`

const Col = styled.div`
  color: #fff;
  flex: 1;
`

const Images = styled.div`
`

const Image = styled(Img)`
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.1);
  float: left;
  width: 50%;
`

export default ({ data: { workImages } }) =>
  <React.Fragment>

    <Section>
      <Logo />
    </Section>

    <Section>

      <Cols>
        <Col>
          <h1>
            Front end,
            <br/>
            User experience,
            Creative
            Developer
          </h1>
          <p>Started off a Designer, now experienced in many aspects of Front End development with a strong belief in great User Experiences.</p>
        </Col>
        <Col>
          <Images>
            {
              workImages.edges.map((image, i) =>
                <Image
                  sizes={image.node.sizes}
                />
              )
            }
          </Images>
        </Col>
      </Cols>

    </Section>

  </React.Fragment>

  export const homeQuery = graphql`
    query homeQuery {
      workImages: allContentfulAsset {
        edges {
          node {
            sizes(maxWidth: 500, maxHeight: 500) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  `
