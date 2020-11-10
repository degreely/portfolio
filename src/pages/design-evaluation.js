import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';

import DesignNavbar from '../components/common/DesignNavbar/DesignNavbar';
import EvaluationPlan from '../components/sections/EvaluationPlan';
import MethodOfEvaluation from '../components/sections/MethodOfEvaluation';
import ResultOfEvaluation from '../components/sections/ResultOfEvaluation';
import KeyChanges from '../components/sections/KeyChanges';

const DesignEvaluation = () => (
  <Layout>
    <div style={{ flexDirection: 'column' }}>
      <Navbar />
      <DesignNavbar />
    </div>
    <div style={{ paddingTop: '10vh' }}>
      <EvaluationPlan />
      <MethodOfEvaluation />
      <ResultOfEvaluation />
      <KeyChanges />
      <Footer />
    </div>
  </Layout>
);

export default DesignEvaluation;
