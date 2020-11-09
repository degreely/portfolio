import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ReactComponent as TeamArt } from '@images/team/team.svg';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Dominique Ng',
    image: 'josh.jpg',
    role: 'Year 3, CS',
  },
  {
    name: 'Kenneth Fung',
    image: 'lisa.jpg',
    role: 'Year 3, CS',
  },
  {
    name: 'Geraldine Foe',
    image: 'ashlyn.jpg',
    role: 'Year 4, CNM',
  },
  {
    name: 'Ong Ai Hui',
    image: 'todd.jpg',
    role: 'Year 4, CS',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="team" accent="secondary">
        
        <Container style={{ position: 'relative' }}>
          <h2 style={{ fontWeight: 'bolder' }}>The Team</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TeamGrid>
              {TEAM.map(({ name, image, role }) => {
                const img = data.allFile.edges.find(
                  ({ node }) => node.relativePath === image
                ).node;

                return (
                  <div key={name}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                    <Title>{name}</Title>
                    <Subtitle>{role}</Subtitle>
                  </div>
                );
              })}
            </TeamGrid>
            <Art>{TeamArt()}</Art>
            <ArtMobile>{TeamArt()}</ArtMobile>
          </div>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 50rem;
  margin: 0;
  position: absolute;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
