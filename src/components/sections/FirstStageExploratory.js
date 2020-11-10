import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ProblemOne } from '@images/art/problem1.svg';
import { ReactComponent as ProblemTwo } from '@images/art/problem2.svg';
import { ReactComponent as ProblemThree } from '@images/art/problem3.svg';
import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';

import '../../styles/style.css';

class FirstStageExploratory extends React.Component {
  render() {
    return (
      <Section id="first-stage-exploratory">
        <Container>
          <Grid>
            <div style={{ marginTop: '1rem' }}>
              <h2>First Stage: Exploratory</h2>
              <p>
                Our user study was completed in two stages. Firstly, our user
                study began with the exploratory phase. We conducted remote
                observations and interviews to gain a sense of the various
                methods and pain points our target group may face while planning
                the progression of their degrees.
              </p>
              <p>
                To obtain information about current planning strategies
                employed, planning mediums used and pain points our target group
                may have as a result of resources made available by their
                faculties and duration in NUS’s system, students from various
                faculties and different levels of study were selected for this
                phase.
              </p>
            </div>
            <Art>{ProblemOne()}</Art>
          </Grid>
          <Grid inverse>
            <Art>{ProblemTwo()}</Art>
            <div>
              <p>
                The remote observation was task-specific and required users to
                let us observe how they usually plan their semesters while they
                think aloud to rationalize their actions. This gave us crucial
                insights into what mediums were used for the planning process
                and what materials were consulted before making decisions.
              </p>
              <p>
                Through these remote observations, we also noted several causes
                to our users’ frustrations and what they liked about the
                specific tools used in their planning process.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                At the end of the session, we asked post-observation questions
                so users could reflect on their experience with module planning
                and what they wish to see in a better platform for planning.
              </p>
              <p>
                You can access the various questions and tasks we have asked
                users{' '}
                <ExternalLink
                  className="link"
                  href="https://tinyurl.com/t8-user-study-template/"
                >
                  here
                </ExternalLink>
                .
              </p>
            </div>
            <Art>{ProblemThree()}</Art>
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

export default FirstStageExploratory;
