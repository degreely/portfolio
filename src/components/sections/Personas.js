import React from 'react';

import { Section, Container } from '@components/global';

class Personas extends React.Component {
  render() {
    return (
      <Section id="personas">
        <Container>
          <div>
            <h2>Personas</h2>
            <p>
              Following the findings from both the remote
              observations/interviews and the survey, we have come up with a few
              personas to summarise the different user characteristics,
              backgrounds, motivations, and frustrations we have observed.
            </p>
            <div>
              <h3>Yilin</h3>
              <p>
                Yilin is a motivated student with a love for Street Dance. She
                plans her modules way in advance to make leeway for any unforeseen
                circumstances that may pop up. One such circumstance was when she
                was almost unable to graduate as she miscounted her credits and
                did not meet the requirements! She believes module planning
                doesn’t have to be so hard. Even though she is already graduating,
                she looks forward to new solutions that may help her juniors in
                the future.
              </p>
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
                  Taking a Final Year Internship (ie. finishing degree in 3.5
                  years instead of 4)
                </li>
              </ul>
              <h4>Frustrations</h4>
              <ul>
                <li>School doesn’t offer the same modules every semester</li>
                <li>
                  Modules are planned with overestimated difficulty due to
                  unrealistically long lab sessions
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
}

export default Personas;
