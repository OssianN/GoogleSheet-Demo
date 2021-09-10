import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import ListItem from "../components/list-item/ListItem"
import "../styles/base.scss"

const Index = () => {
  const query = useStaticQuery(
    graphql`
      {
        allContentfulEvent {
          edges {
            node {
              titel
              slug
              beskrivning {
                beskrivning
              }
              eventbild {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              mainText {
                raw
              }
            }
          }
        }
      }
    `
  )

  const events = query.allContentfulEvent.edges
  return (
    <Layout>
      <Helmet title="Aktuellt" />
      <h1 className="main__header">Aktuellt</h1>
      <ul className="bookings__ul">
        {events.map(eventNode => {
          const event = eventNode.node
          return <ListItem event={event} />
        })}
      </ul>
    </Layout>
  )
}

export default Index
