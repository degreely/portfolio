import '../index.scss';

import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Team from '@sections/Team';
import Footer from '@sections/Footer';
import Frontend from '../components/sections/Frontend';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Frontend />
/    <Team />
    <Footer />
  </Layout>
);

export default IndexPage;
