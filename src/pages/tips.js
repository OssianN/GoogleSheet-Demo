import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import images from '../images';
import '../styles/base.scss';

const tips = () => {
  return (
    <Layout>
        <Helmet title='SBS Tipsa oss' />
        <div className="wrapper tips tabWrapper">
          <h2 className="section-headline">Spännande ljusprojekt och diskussionsämnen</h2>
          <p>
            Det finns många spännande ljusprojekt, platser och diskussionsämnen.
            Tipsa oss gärna om bra och aktuella arrangemang, studiebesök
            och ämnen som vi skulle kunna arrangera och diskutera tillsammans med våra
            medlemmar.
          </p>
          <form>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <textarea type="text"></textarea>
          </form>
        </div>
    </Layout>
  )
}

export default tips;
