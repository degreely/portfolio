import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import { ReactComponent as Celebration } from '@images/art/graduation.svg';

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>{Celebration()}</Art>
            <Text>
              <h1>
                <Headline>
                  Supercharge
                  <br />
                  your degree planning
                  <br />
                  with us today
                </Headline>
              </h1>
              <br />
              <p>
                <StyledExternalLink href="https://degreely.github.io/degreely/">
                  Check out degree.ly &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Headline = styled.div`
  color: ${props => props.theme.color.white.regular};
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: ${props => props.theme.color.white.dark};
  opacity: 0.7;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.white.regular};
    opacity: 1;
  }
`;

export default Header;
