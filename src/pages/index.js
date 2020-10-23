import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Problem from '@sections/Problem';
import Research from '@sections/Research';
import Evaluation from '@sections/Evaluation';
import Prototyping from '@sections/Prototyping';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Problem />
    <Research />
    <Evaluation />
    <Prototyping />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
