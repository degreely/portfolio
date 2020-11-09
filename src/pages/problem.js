import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import Problem from '@sections/Problem';

const ProblemPage = () => (
  <Layout>
    <Navbar />
    <Problem />
    <Footer />
  </Layout>
);

export default ProblemPage;
