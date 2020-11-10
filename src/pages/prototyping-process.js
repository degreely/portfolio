import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';
import PrototypeNavbar from '../components/common/PrototypeNavbar';
import IdeationPrototyping from '../components/sections/IdeationPrototyping';
import FirstIteration from '../components/sections/FirstIteration';
import SecondIteration from '../components/sections/SecondIteration';
import FinalIteration from '../components/sections/FinalIteration';

const PrototypePage = () => (
  <Layout>
    <div style={{ flexDirection: 'column' }}>
      <Navbar />
      <PrototypeNavbar />
    </div>
    <div style={{ paddingTop: '10vh' }}>
      <IdeationPrototyping />
      <FirstIteration />
      <SecondIteration />
      <FinalIteration />
      <Footer />
    </div>
  </Layout>
);

export default PrototypePage;
