import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import '../styles/base.scss';

const About = () => {
  return (
    <Layout>
        <Helmet title='SBS Om Oss' />
        <div className="wrapper">
          <h2 className="section-headline">Section</h2>
          <ul>
          </ul>
        </div>
    </Layout>
  )
}

export default About;
