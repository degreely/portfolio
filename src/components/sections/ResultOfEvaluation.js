import React from 'react';
import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';

import '../../styles/style.css';

class ResultOfEvaluation extends React.Component {
  render() {
    return (
      <Section id="result-and-process-of-user-insight-consideration">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>
              Results of Evaluation and Process of User Insight Consideration
            </h2>
            <p>
              <i>
                Note: Full observations and responses recorded by facilitators
                in templates are available{' '}
                <ExternalLink
                  className="link"
                  href="https://tinyurl.com/yy5d4ucn"
                >
                  here
                </ExternalLink>
                .
              </i>
            </p>
            <p>
              At the end of the evaluation, the results were parsed and compiled
              into a single document. Problems that more than one participant
              brings up were given a higher priority so that we could address as
              many prominent flaws as we could given the limited amount of time
              we had for this project. We also chose to use the following
              dimensions to discern what kind of user problem was proposed; this
              helped indicate to us how serious a problem might be and what
              actions we could take to resolve it.
            </p>
            <h3>
              Dimensions Used to Consider User Insight and Inform
              Decisions/Actions for Improvement:
            </h3>
            <ul>
              <li>
                <b>Graphical Interface/Layout Problem:</b> These are aesthetic,
                design problems which might include:
                <ul>
                  <li>Graphical size issues (font, box, columns, rows)</li>
                  <li>Interface (too cluttered or too barren)</li>
                  <li>
                    Other displeasing or misleading aesthetic decisions
                    (colours, icons etc.)
                  </li>
                </ul>
              </li>
              <li>
                <b>Usability Problem:</b> This indicates issues with the user
                flow, such as having too many steps to complete tasks; or
                inadequate amount of feedback provided to indicated that a
                certain task has been completed or if an error has been met
              </li>
              <li>
                <b>Comprehension Problem:</b> This indicates severe mismatch in
                the system’s image (interface/icons) and the user’s mental model
                and understanding of how the system executes or hints essential
                information i.e. instruction/icon/flow did not resonate with
                user and user is left confused and lost
              </li>
              <li>
                <b>Missing feature:</b> This indicates that a key feature that
                the users need to complete crucial tasks is not accommodated and
                designed for within our solution which we may need to address
              </li>
            </ul>
            <p>
              Keeping in mind those dimensions, our group compiled all the
              feedback we gathered from users into two summation sheets, which
              we used to come to a consensus on what should be changed for each
              iteration of the prototype. Within these documents, we recorded
              the changes made and the reasoning behind them.
            </p>
            <ul>
              <li>
                <ExternalLink
                  className="link"
                  href="https://tinyurl.com/y6n5hsgp"
                >
                  Full summation and actions taken for first iteration of
                  prototype after peer evaluation
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  className="link"
                  href="https://tinyurl.com/y4hdxrgb"
                >
                  Full summation and actions taken for second iteration of
                  prototype after user evaluation
                </ExternalLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    );
  }
}

export default ResultOfEvaluation;
