// Import SRLWrapper
import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import picOne from '../../images/survey/Picture1.png';
import picTwo from '../../images/survey/Picture2.png';
import picThree from '../../images/survey/Picture3.png';
import picFour from '../../images/survey/Picture4.png';
import picFive from '../../images/survey/Picture5.png';
import picSix from '../../images/survey/Picture6.png';

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

function Survey() {
  return (
    <div className="survey">
      <SRLWrapper options={options}>
        <img
          src={picOne}
          alt="Year of study"
          height="100rem"
          className="clickable"
        />
        <img
          src={picTwo}
          alt="Degree planning considerations"
          width="200rem"
          className="clickable"
        />
        <img
          src={picThree}
          alt="Use of template"
          width="200rem"
          className="clickable"
        />
        <img
          src={picFour}
          alt="Awareness of EduRec's What-If Report"
          width="200rem"
          className="clickable"
        />
        <img
          src={picFive}
          alt="Mediums used"
          width="200rem"
          className="clickable"
        />
        <img
          src={picSix}
          alt="Issues with module planning"
          width="200rem"
          className="clickable"
        />
      </SRLWrapper>
    </div>
  );
}

export default Survey;
