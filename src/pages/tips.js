import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import images from '../images';
import '../styles/base.scss';

const Tips = () => {
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
          <img src={images.tips1} className="odd" alt='tips1'></img>
          <form>
            <label htmlFor='nameInput'>Name*</label>
            <input type="text" id='nameInput'></input>
            <label htmlFor='nameInput'>E-post*</label>
            <input type="text"></input>
            <label htmlFor='nameInput'>Ämne</label>
            <input type="text"></input>
            <label htmlFor='nameInput'>Meddelande</label>
            <textarea type="text"></textarea>
          </form>
          <img src={images.tips2} alt='tips2'></img>
        </div>
    </Layout>
  )
}

export default Tips;
