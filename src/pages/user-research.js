import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import UserResearchNavbar from '@common/UserResearchNavbar';
import UserIdentificationAndRecruitment from '@sections/UserIdentificationAndRecruitment';
import FirstStageExploratory from '@sections/FirstStageExploratory';
import SecondStageSurvey from '@sections/SecondStageSurvey';
import Personas from '@sections/Personas';
import Scenarios from '@sections/Scenarios';

const ResearchPage = () => (
  <Layout>
    <div style={{ flexDirection: 'column' }}>
      <Navbar />
      <UserResearchNavbar />
    </div>
    <div style={{ paddingTop: '10vh' }}>
      <UserIdentificationAndRecruitment />
      <FirstStageExploratory />
      <SecondStageSurvey />
      <Personas />
      <Scenarios />
      <Footer />
    </div>
  </Layout>
);

export default ResearchPage;
