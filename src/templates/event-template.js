import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import "../styles/base.scss"
import "./template.css"

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
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }
  const [formInputs, setFormInputs] = useState(initialState)
  const event = data.post

  const handleChange = e => {
    const { name } = e.target
    setFormInputs({
      ...formInputs,
      [name]: e.target.value,
    })
  }

  const resetForm = () => {
    setFormInputs(initialState)
  }

  const handleSumbit = async e => {
    e.preventDefault()

    const formData = {
      ...formInputs,
      sheetTitle: event.sheet,
    }

    const fetchData = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(formData),
    }

    try {
      resetForm()
      await fetch("/.netlify/functions/sendDataToSheet", fetchData)
      await fetch("/.netlify/functions/sendEmail", fetchData)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Layout>
      <Helmet title={`${event.titel}`} />
      <section className='event-info__wrapper'>
        <Img
          alt="bokning1"
          fluid={event.eventbild.fluid}
          objectFit="cover"
        ></Img>
        <h2 className="event__headline">{event.titel}</h2>
        <div className="two-columns">
          <div>{documentToReactComponents(JSON.parse(event.mainText.raw))}</div>
          <div>
            {documentToReactComponents(
              JSON.parse(event.praktiskInformation.raw)
            )}
          </div>
        </div>
      </section>

      <section className="form__wrapper">
        <h2 className="form__header">Boka en plats</h2>
        <form className='event__form' onSubmit={handleSumbit}>
          <input
            placeholder='Name'
            className="form__input"
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          ></input>
          <input
            placeholder='Email'
            className="form__input"
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
          ></input>
          <input
            placeholder='Subject'
            className="form__input"
            type="text"
            id="subject"
            name="subject"
            onChange={handleChange}
          ></input>
          <textarea
            placeholder='Message'
            className="form__input"
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={formInputs.message}
          ></textarea>
          <button className="btn event__button" type="submit">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default EventTemplate
