import React from 'react';
import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';

import '../../styles/style.css';

class ResultOfEvaluation extends React.Component {
  render() {
    return (
      <Section id="result-and-process-of-user-insight-consideration">
        <Container>
          <div>
            <h2>Method of Evaluation</h2>
            <p>
              Having went through two rounds of iterative designs, we present
              the final iteration of degree.ly below:
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

export default ResultOfEvaluation;
