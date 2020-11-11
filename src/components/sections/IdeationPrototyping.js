import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import SimpleReactLightbox from 'simple-react-lightbox';

import { Section, Container } from '@components/global';

import userFlow from '../../images/prototyping/ideation/user-flow.png';
import chooseTemplate from '../../images/prototyping/ideation/jamboard/lowfi-choosetemplate.png';
import dashboard from '../../images/prototyping/ideation/jamboard/lowfi-dashboard.png';
import degreeSettings from '../../images/prototyping/ideation/jamboard/lowfi-degreesettings.png';
import editModeTwo from '../../images/prototyping/ideation/jamboard/lowfi-editmode-2.png';
import editMode from '../../images/prototyping/ideation/jamboard/lowfi-editmode.png';

const options = {
  settings: {
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    autoplaySpeed: 0,
  },
  buttons: {
    iconColor: '#FFFFFF',
    backgroundColor: '#5E60CE',
  },
  caption: {
    captionColor: '#FFFFFF',
    captionFontWeight: '400',
  },
};

class IdeationPrototyping extends React.Component {
  render() {
    return (
      <Section id="ideation-and-prototyping-process">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>Ideation and Prototyping Process</h2>
            <p>
              Using the personas and scenarios we curated from the user study
              process, we came together to discuss how to translate all the
              design requirements into a comprehensive user flow that would be
              the structure of our degree.ly website/platform. The following was
              a proposed <b>user flow chart</b>. It comprises key steps,
              screens, and features of degree.ly that would be essential to the
              degree planning process for our users.
            </p>
            <p>Click on the user flow chart below to expand it.</p>
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <img
                  src={userFlow}
                  alt="Issues with module planning"
                  width="500rem"
                  className="clickable"
                />
              </SRLWrapper>
            </SimpleReactLightbox>
            <p>
              Using the user flow chart above, we then proceeded to sketch some
              low-fidelity prototypes/wireframes of the key screens and
              processes that the degree.ly platform would have. These were done
              on <b>Google Jamboard</b>.
            </p>
            <p>Click on any of the Jamboard snippets below to start viewing the gallery.</p>
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <img
                  src={chooseTemplate}
                  alt="Template Selection"
                  width="200rem"
                  className="clickable"
                />
                <img
                  src={dashboard}
                  alt="Dashboard 1"
                  width="200rem"
                  className="clickable"
                />
                <img
                  src={degreeSettings}
                  alt="Editing Focus Area/Specialization"
                  width="200rem"
                  className="clickable"
                />
                <img
                  src={editModeTwo}
                  alt="Dashboard 2"
                  width="200rem"
                  className="clickable"
                />
                <img
                  src={editMode}
                  alt="Dashboard 3"
                  width="200rem"
                  className="clickable"
                />
              </SRLWrapper>
            </SimpleReactLightbox>
            <p>
              To better visualize and emulate the important navigation flows and
              user interaction points on each screen, we later moved from
              sketching low-fidelity wireframes to using a more mid-high
              fidelity prototyping platform, <b>Figma</b>, to continue our
              collaborative, rapid prototyping process.
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default IdeationPrototyping;
