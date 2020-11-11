import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

import control from '../../images/frontend/control.png';
import deleteSem from '../../images/frontend/prevent-errors.png';
import contrast from '../../images/frontend/contrast.png';
import consistent from '../../images/frontend/consistent.png';
import metrics from '../../images/frontend/metrics.png';

class Frontend extends React.Component {
  render() {
    return (
      <Section id="frontend" accent="secondary">
        <Container>
          <h2>Design Principles</h2>
          <p>
            These are some ways in which our design of degree.ly has adhered to
            design principles.
          </p>
          <Grid>
            <div>
              <h3>Consistency</h3>
              <p>
                Throughout the application, our theme colours of purple and blue
                shades are used throughout for consistency. This applies to our
                buttons as well.
              </p>
              <p>
                This allows important fields like unallocated modules in red
                (bottom-right of the screenshot) to stand out.
              </p>
            </div>
            <Art>
              <img src={consistent} width="500rem" />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <img src={contrast} width="400rem" />
            </Art>
            <div>
              <h3>Universal Usability</h3>
              <p>
                In the example above, we do not solely rely on colour to convey
                information. Although the unmet requirement in{' '}
                <i>IT Professionalism</i> is highlighted in red, it is
                accompanied by a badge as well which indicates the number of
                unmet modules in that basket.
              </p>
              <p>
                Moreover, all text and components on the page have appropriate
                contrast with the background to create an accessible Web
                experience for users.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h3>Prevent Errors</h3>
              <p>
                To prevent users from accidentally deleting a whole semester, we
                have added a popup to confirm that they would like to delete the
                module. Users are able to easily dismiss the popup if they have
                accidentally clicked on the delete button, or if they have
                changed their mind.
              </p>
            </div>
            <Art>
              <img src={deleteSem} width="500rem" />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <img src={control} width="400rem" />
            </Art>
            <div>
              <h3>Keep Users in Control</h3>
              <p>
                The plan dropdown that is present in every screen lets users
                know which one of their plans they are currently viewing and
                allows them to easily transition between the different plans
                that they have.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h3>Reduce Cognitive Load</h3>
              <p>
                The degree metrics on the right sidebar follows the user through
                every screen as well, and updates according to the degree
                settings they currently have and the modules allocated. For
                example, changing their degree settings will alter the{' '}
                <i>Degree Requirements</i> section accordingly.
              </p>
              <p>
                This way, users do not have to remember how their changes to
                their degree plan will affect their degree progress as it is
                updated realtime in the metrics sidebar.
              </p>
            </div>
            <Art>
              <img src={metrics} width="500rem" />
            </Art>
          </Grid>
        </Container>
      </Section>
    );
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  margin-bottom: 5rem;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h3 {
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

export default Frontend;
