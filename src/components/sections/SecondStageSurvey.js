import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Section, Container } from '@components/global';
import Survey from './Survey';

import '../../styles/style.css';

class SecondStageSurvey extends React.Component {
  render() {
    return (
      <Section id="second-stage-survey">
        <Container>
          <div>
            <h2>Second Stage: Survey</h2>
            <p>
              With the crucial insights obtained through our exploratory phase,
              we began the second stage of our user study. We crafted a survey
              form based on the observation data collected and distributed it to
              obtain feedback on the module planning experience from a wider
              group of users. The second phase aimed to verify and obtain a
              consensus on the various considerations taken when planning and
              the various pain points experienced during this process.
            </p>
            <br />
            <p>
              To potentially expand on what we already knew, we also allowed
              users to add on their own experiences and planning goals if they
              wished. Through this phase, we were able to paint a clearer
              picture of what our target group wants and which pain points to
              address first.
            </p>
            <br />
            <p>The results from the survey are included below. Click on any image to start viewing the gallery.</p>
            <br />
            <SimpleReactLightbox>
              <Survey />
            </SimpleReactLightbox>
          </div>
        </Container>
      </Section>
    );
  }
}

export default SecondStageSurvey;
