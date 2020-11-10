import React from 'react';
import ExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

import '../../styles/style.css';

class SecondIteration extends React.Component {
  render() {
    return (
      <Section id="second-iteration">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>Second Iteration</h2>
            <iframe
              title="degree.ly v2"
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVdxJmozo3HWTB8EN5YCHjq%2Fdegree.ly-v2%3Fnode-id%3D0%253A1"
              allowfullscreen
            ></iframe>
            <p>
              You may view our interactive prototype <ExternalLink className="link" href="https://www.figma.com/proto/VdxJmozo3HWTB8EN5YCHjq/degree.ly-v2?node-id=139%3A0&viewport=139%2C305%2C0.05921787768602371&scaling=contain">here</ExternalLink>.
            </p>
            <p>
              The second prototype featured changes we made to the interface
              based on the feedback gathered from the peer evaluation. We
              prepared it for evaluation by real/potential users (User
              Evaluation), which was done with another set of 4 NUS students
              (see Design Evaluation for more details and results). After the
              mixed reactions and preferences reported in the peer evaluation,
              we decided to give users the option to choose between the A and B
              version of layouts for the website, making it an interactive
              feature on the platform. Hence this iteration did not include an
              A/B test as before.
            </p>
            <p>
              The results from the second round of user evaluation were once
              more systematically considered before we proceeded to make changes
              based on them (see Design Evaluation for more details on the
              process). This brought us to the Final Iteration of the degree.ly
              prototype.
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default SecondIteration;
