import React from 'react';

import { Section, Container } from '@components/global';

class Personas extends React.Component {
  render() {
    return (
      <Section id="personas">
        <Container>
          <div>
            <h2>Personas</h2>
            <p>Following the findings from both the remote observations/interviews and the survey, we have come up with a few personas to summarise the different user characteristics, backgrounds, motivations, and frustrations we have observed.
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default Personas;
