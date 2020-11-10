import React from 'react';
import { Section, Container } from '@components/global';

import '../../styles/style.css';

class EvaluationPlan extends React.Component {
  render() {
    return (
      <Section id="evaluation-plan">
        <Container>
          <div>
            <h2>Evaluation Plan</h2>
            <p>
              The overall aim of the usability tests we conducted during the Peer Evaluation (with classmates) and User Evaluation (with potential users) stages were to identify any usability problems degree.ly has so that they could be addressed.
            </p>
            <p>
              The tests were conducted with the following goals:
            </p>
            <ul>
              <li>
                Identify difficulties participants face when performing critical tasks such as creating a new plan (with and without a degree template), adding or removing modules from their plan, switching between different plans and modifying their degree requirements (majors, minors, specialisations/focus areas).
              </li>
              <li>
                Verify if sufficient visual cues are provided to aid participants in performing frequent tasks, such as recognising that modules can be dragged and dropped from one semester to another.
              </li>
              <li>
                Determine which component layouts and data formats our participants preferred the most.
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    );
  }
}

export default EvaluationPlan;
