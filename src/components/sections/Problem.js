import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Problem = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="problem">
        <Container>
            <Grid>
              <div>
                <h2>Initial Problem Statement</h2>
                <p>
                  The project came about in recognition of the lack of a single, well-designed platform for existing students to consolidate their degree progress. We noticed that current students employ a myriad of self-made and sourced solutions to arrange their study plans, all while hoping they do not make the mistake of missing graduation requirements.
                </p>
              </div>
              <Art>
                <Img fluid={data.art_fast.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_learn.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Alternatives in Place</h2>
                <p>
                   From the use of spreadsheets to NUSMods, the slow and arduous process is made worse by resources and materials being strewn across the school’s various platforms, requiring multi-tasking skills and a high cognitive load to consolidate and analyze.
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <h2>EduRec's what-if</h2>
                <p>
                   One of the most useful sites NUS has to offer for planning modules, EduRec’s what-if report generator, is slow and frustrating to navigate. Furthermore, it is not widely known and only available for limited periods in an academic year.
                   <br />
                </p>
                <p>
                  With degree.ly, we hope to make module planning and progress tracking a less nightmarish and more efficient process.
                </p>
              </div>
              <Art>
                <Img fluid={data.art_ideas.childImageSharp.fluid} />
              </Art>
            </Grid>
          </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
    font-weight: 700;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Problem;
