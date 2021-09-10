import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./list-item.css"
import "../../styles/base.scss"

const ListItem = ({ event }) => {
  return (
    <li className="event__li two-columns">
      <div className="booking-text__container">
        <h2>{event.titel}</h2>
        <p>{event.beskrivning?.beskrivning}</p>
        <Link to={`/${event.slug}`}>
          <button className="btn">Boka</button>
        </Link>
      </div>
      <Img
        fluid={event.eventbild.fluid}
        className="booking__img"
        alt={`${event.title} image`}
      ></Img>
    </li>
  )
}

export default ListItem
