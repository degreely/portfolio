import styled from 'styled-components';

import { Container } from '@components/global';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 16px 0;
  background-color: ${props => props.theme.color.primary};
  position: fixed;
  height: 10vh;
  width: 100%;
  z-index: 1000;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.primary};
  font-weight: 600;
  ${props => props.theme.font_size.small};

  a {
    text-decoration: none;
    color: ${props => props.theme.color.white.dark};
    display: inline-block;
    position: relative;
  }

  a.active {
    &:after {
      content: '•';
      display: inline-block;

      /* position the dot underneath the character */
      position: absolute;
      bottom: -1em;
      left: 0;

      /* center the dot horizontally */
      text-align: center;
      width: 100%;
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  background: ${props => props.theme.color.primary};
`;

export const Brand = styled.div`
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.white.regular};
  font-weight: 700;
  ${props => props.theme.font_size.large};
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
