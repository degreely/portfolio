import React from 'react';
import styled from 'styled-components';
import { TabsManager, Tabs, TabPanels, TabPanel } from '@react-md/tabs';

import { Section, Container } from '@components/global';

import yilinPic from '../../images/persona/yilin.png';
import atiqahPic from '../../images/persona/atiqah.png';
import amitPic from '../../images/persona/amit.png';

const tabs = ['Yilin', 'Atiqah', 'Amit'];

class Personas extends React.Component {
  render() {
    return (
      <Section id="personas">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>Personas</h2>
            <p>
              Following the findings from both the remote
              observations/interviews and the survey, we have come up with a few
              personas to summarise the different user characteristics,
              backgrounds, motivations, and frustrations we have observed.
            </p>
            <TabsManager tabs={tabs} tabsId="basic-usage-tabs">
              <Tabs />
              <TabPanels>
                <TabPanel id="yilin">
                  <h3>Yilin</h3>

                  <Grid inverse>
                    <Art>
                      <img src={yilinPic} width="300rem" />
                    </Art>
                    <p>
                      Yilin is a motivated student with a love for Street Dance.
                      She plans her modules way in advance to make leeway for
                      any unforeseen circumstances that may pop up. One such
                      circumstance was when she was almost unable to graduate as
                      she miscounted her credits and did not meet the
                      requirements! She believes module planning doesn’t have to
                      be so hard. Even though she is already graduating, she
                      looks forward to new solutions that may help her juniors
                      in the future.
                    </p>
                  </Grid>

                  <h4>Background</h4>
                  <ul>
                    <li>Y4 student from the Faculty of Science</li>
                    <li>Majoring in Life Sciences</li>
                    <li>Loves to travel</li>
                  </ul>
                  <h4>Motivations</h4>
                  <ul>
                    <li>Having modules to map for Summer School</li>
                    <li>
                      Taking a Final Year Internship (ie. finishing degree in
                      3.5 years instead of 4)
                    </li>
                  </ul>
                  <h4>Frustrations</h4>
                  <ul>
                    <li>
                      School doesn’t offer the same modules every semester
                    </li>
                    <li>
                      Modules are planned with overestimated difficulty due to
                      unrealistically long lab sessions
                    </li>
                  </ul>
                </TabPanel>
                <TabPanel id="atiqah">
                  <h3>Atiqah</h3>

                  <Grid inverse>
                    <Art>
                      <img src={atiqahPic} width="300rem" />
                    </Art>
                    <p>
                      Amirah is a laid back girl who plays Floorball
                      competitively with an external club. Module planning is a
                      breeze for her because she follows the recommended modules
                      given by FoE, which is tailored to each track. She doesn’t
                      really relate to her friends’ concerns when it comes to
                      that time of the year to plan for the next semester.
                    </p>
                  </Grid>

                  <h4>Background</h4>
                  <ul>
                    <li>Y3 student from the Faculty of Engineering</li>
                    <li>Majoring in Biomedical Engineering</li>
                    <li>Owns 2 cats</li>
                  </ul>
                  <h4>Motivations</h4>
                  <ul>
                    <li>Taking the same modules with her friend group</li>
                  </ul>
                  <h4>Frustrations</h4>
                  <ul>
                    <li>
                      Difficult to simulate different CAPs if she takes
                      different modules
                    </li>
                  </ul>
                </TabPanel>
                <TabPanel id="amit">
                  <h3>Amit</h3>

                  <Grid inverse>
                    <Art>
                      <img src={amitPic} width="300rem" />
                    </Art>
                    <p>
                      Amit has a methodical approach to planning, and more so
                      for module planning. He insists on having a bird’s-eye
                      view on his options and is irritated that there isn’t an
                      existing tool for that. He takes comfort in the fact that
                      module planning gets easier as seniority increases as
                      there are fewer modules he has to take.
                    </p>
                  </Grid>

                  <h4>Background</h4>
                  <ul>
                    <li>Y2 student from the School of Computing</li>
                    <li>Majoring in Computer Science</li>
                    <li>Enjoys the solitude brought about by Covid-19</li>
                  </ul>
                  <h4>Motivations</h4>
                  <ul>
                    <li>
                      Looking for modules taught by professors with good reviews
                    </li>
                  </ul>
                  <h4>Frustrations</h4>
                  <ul>
                    <li>
                      Modules for focus area are not integrated into NUSMods
                    </li>
                    <li>Cannot filter by modules he qualifies for</li>
                  </ul>
                </TabPanel>
              </TabPanels>
            </TabsManager>
          </div>
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
export default Personas;
