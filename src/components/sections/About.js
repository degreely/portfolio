import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import { ReactComponent as ManChecking } from '@images/art/checking.svg';

class About extends React.Component {
  render() {
    return (
    <Section id="about">
      <Container>
        <Grid>
          <div>
            <h2>About degree.ly</h2>
            <p>
              <b>degree.ly</b> is a platform designed for NUS students planning their
              semesters and cumulatively tracking their degree progress.
              <br />
              It builds upon the success of the <StyledExternalLink href="https://nusmods.com/">NUSMods</StyledExternalLink> platform and brings together a more integrated and convenient experience for students to keep track of and plan their degree progression.
              <br />
            </p>
          </div>
          <Art>{ManChecking()}</Art>
        </Grid>
      </Container>
    </Section>
    )
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  h2 {
    font-weight: 700;
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }
    
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default About;
