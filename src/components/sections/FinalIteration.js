import React from 'react';
import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';

import '../../styles/style.css';

class FinalIteration extends React.Component {
  render() {
    return (
      <Section id="final-iteration" accent="secondary">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>Final Iteration</h2>
            <p>
              Having went through two rounds of iterative designs, we present
              the final iteration of degree.ly below:
            </p>
            <iframe
              title="degree.ly v3"
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLpmdjwWh1Tg28nlwjFOJJU%2Fdegree.ly-v3%3Fnode-id%3D0%253A1"
              allowfullscreen
            ></iframe>
            <p>
              You may view our interactive prototype{' '}
              <ExternalLink
                className="link"
                href="https://www.figma.com/proto/LpmdjwWh1Tg28nlwjFOJJU/degree.ly-v3?node-id=139%3A0&viewport=149%2C319%2C0.0655687004327774&scaling=contain"
              >
                here
              </ExternalLink>
              .
            </p>
            <p>
              Throughout these iteration processes, bringing in users’ opinions
              and having them take part in the design conversation earlier
              before the final design has been extremely valuable and
              informative for our team. This is especially because they helped
              us identify problems we overlooked. Having gone through three
              iterations of our prototype, we hope that we have designed a user
              interface that better reflects the end-users’ needs and
              expectations towards our platform.
            </p>
            <p>
              Our team also made great efforts to translate the prototype design
              into a more functional frontend implementation of our proposed
              interactive designs available{' '}
              <ExternalLink
                className="link"
                href="https://degreely.github.io/degreely/"
              >
                here
              </ExternalLink>
              .
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default FinalIteration;
