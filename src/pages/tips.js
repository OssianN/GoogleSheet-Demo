import React, {useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import images from '../images';
import '../styles/base.scss';

const Tips = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  
  const handleSumbit = async e => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      msg,
    }

    const fetchData = {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(formData)
    }

    try {
      // const sendMailRes = await fetch("/.netlify/functions/sendEmail", fetchData);
    } catch (e) {
      console.error(e)
    }
  }

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
          <form onSubmit={e => handleSumbit(e)}>
            <label htmlFor='nameInput'>Name*</label>
            <input type="text" id='nameInput' onChange={e => setName(e.target.value)}></input>
            <label htmlFor='nameInput' >E-post*</label>
            <input type="text" onChange={e => setEmail(e.target.value)}></input>
            <label htmlFor='nameInput'>Ämne</label>
            <input type="text" onChange={e => setSubject(e.target.value)}></input>
            <label htmlFor='nameInput'>Meddelande</label>
            <textarea type="text" onChange={e => setMsg(e.target.value)}></textarea>
            <button className="button submitButton" type="submit" >Submit</button>
          </form>
          <img src={images.tips2} alt='tips2'></img>
        </div>
    </Layout>
  )
}

export default Tips;
