import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/degreely',
  }
];

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <StyledContainer>
          <Copyright>
            <h2 style={{ fontWeight: 'bolder' }}>degree.ly</h2>
            <span>
              Illustrations by <ExternalLink href="https://freepik.com">pch.vector</ExternalLink>
            </span>
          </Copyright>
          <SocialIcons>
            {SOCIAL.map(({ icon, link }) => (
              <ExternalLink key={link} href={link}>
                <img src={icon} alt="link" />
              </ExternalLink>
            ))}
          </SocialIcons>
        </StyledContainer>
      </FooterWrapper>
    );
  }
}

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.white.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
