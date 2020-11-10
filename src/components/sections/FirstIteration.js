import React from 'react';
import ExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

import '../../styles/style.css';

class FirstIteration extends React.Component {
  render() {
    return (
      <Section id="first-iteration">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>First Iteration</h2>
            <iframe
              title="degree.ly v1"
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8143UnTnVi33YE61RGqdxk%2Fdegree.ly-v1%3Fnode-id%3D0%253A1"
              allowfullscreen
            ></iframe>
            <p>
              You may view our interactive prototype <ExternalLink className="link" href="https://www.figma.com/proto/8143UnTnVi33YE61RGqdxk/degree.ly-v1?node-id=139%3A0&viewport=-749%2C-129%2C0.15888762474060059&scaling=contain">here</ExternalLink>.
            </p>
            <p>
              This version of the prototype was prepared for the pilot user
              evaluation test (the Peer Evaluation) which was done with members
              of another project from our course. The evaluation observed how
              they navigated and interacted with the prototype, as well as the
              process by which they attempted to complete the tasks we prepared
              for them (see Design Evaluation for more details). This test also
              included an A/B test of two versions of the prototype in order to
              sample their preferred templates/module layout.
            </p>
            <p>
              After compiling the users’ responses (see Design Evaluation for
              more details and results), we proceeded to make changes and came
              up with the second iteration of the prototype.
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default FirstIteration;
