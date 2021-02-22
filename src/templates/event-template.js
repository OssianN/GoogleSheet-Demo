import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from "gatsby-image";
import '../styles/base.scss';

export const query = graphql`
  query($slug: String!) {
    post: contentfulEvent(slug: { eq: $slug }) {
        titel
        eventbild {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        mainText {
          raw
        }
        praktiskInformation {
          raw
        }
        sheet
      }
    }
`

const EventTemplate = ({ data }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const nameInput = useRef('');
  const emailInput = useRef('');
  const subjectInput = useRef('');
  const msgInput = useRef('');

  const resetForm = () => {
    nameInput.current.value = '';
    emailInput.current.value = '';
    subjectInput.current.value = '';
    msgInput.current.value = '';
  }

  const event = data.post;
  
  const handleSumbit = async e => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      msg,
      sheetTitle: event.sheet,
    }

    const fetchData = {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(formData)
    }

    try {
      resetForm();
      await fetch("/.netlify/functions/sendDataToSheet", fetchData);
      await fetch("/.netlify/functions/sendEmail", fetchData);
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Layout>
        <Helmet title={`SBS ${event.titel}`} />
        <div className="tabHero">
          <Img
            alt='bokning1' fluid={event.eventbild.fluid}
            objectFit='cover'>
          </Img>
        </div>
        <div className="wrapper">
          <h2 className="section-headline">{event.titel}</h2>
          <div className="twoColumn">
            <div>{ documentToReactComponents(JSON.parse(event.mainText.raw)) }</div>
            <div>{ documentToReactComponents(JSON.parse(event.praktiskInformation.raw)) }</div>
          </div>
          <div>
            <h2 className='event_form_header'>Boka en plats</h2>
            <form onSubmit={e => handleSumbit(e)}>
              <label htmlFor='nameInput'>Name*</label>
              <input type="text" id='nameInput' onChange={e => setName(e.target.value)} ref={nameInput}></input>
              <label htmlFor='nameInput' >E-post*</label>
              <input type="text" onChange={e => setEmail(e.target.value)} ref={emailInput}></input>
              <label htmlFor='nameInput'>Ämne</label>
              <input type="text" onChange={e => setSubject(e.target.value)} ref={subjectInput}></input>
              <label htmlFor='nameInput'>Meddelande</label>
              <textarea type="text" onChange={e => setMsg(e.target.value)} ref={msgInput}></textarea>
              <button className="button" type="submit" >Submit</button>
            </form>
          </div>
        </div>
    </Layout>
  )
}

export default EventTemplate;
