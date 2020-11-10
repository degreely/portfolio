import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

import domPic from '../../images/team/dom.svg';
import kennethPic from '../../images/team/kenneth.svg';
import geraldinePic from '../../images/team/geraldine.svg';
import aihuiPic from '../../images/team/aihui.svg';

class Team extends React.Component {
  render() {
    return (
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h2 style={{ fontWeight: 'bolder' }}>The Team (G08)</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TeamGrid>
              <div>
                <img src={domPic} height="200rem" />
                <Title>Dominique Ng</Title>
                <Subtitle>Year 3</Subtitle>
                <Subtitle>Computer Science</Subtitle>
              </div>
              <div>
                <img src={kennethPic} height="200rem" />
                <Title>Kenneth Fung</Title>
                <Subtitle>Year 3</Subtitle>
                <Subtitle>Computer Science</Subtitle>
              </div>
              <div>
                <img src={geraldinePic} height="200rem" />
                <Title>Geraldine Foe</Title>
                <Subtitle>Year 4</Subtitle>
                <Subtitle>Sociology</Subtitle>
              </div>
              <div>
                <img src={aihuiPic} height="200rem" />
                <Title>Ong Ai Hui</Title>
                <Subtitle>Year 4</Subtitle>
                <Subtitle>Computer Science</Subtitle>
              </div>
            </TeamGrid>
          </div>
        </Container>
      </Section>
    );
  }
}

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 100%;
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

const Title = styled.p`
  margin-top: 16px;
  font-family: ${props => props.theme.font.primary};
  font-weight: 600;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.color.black.light};
`;

export default Team;
