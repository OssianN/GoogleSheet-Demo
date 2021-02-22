import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import '../styles/base.scss';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";

const Aktuellt = () => {
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

  const events = query.allContentfulEvent.edges;
  console.log(events[0].node.beskrivning)
  return (
    <Layout>
        <Helmet title='SBS Aktuellt' />
        <div className="wrapper tabWrapper">
          <h2 className="section-headline">Aktuellt</h2>
          <ul className='bokningsLista'>
            {events.map(eventNode => {
              const event = eventNode.node;
              return (
                <li>
                  <div className='bokning twoColumn'>
                    <div className='bokningText'>
                      <h2>{ event.titel }</h2>
                      <p>{ event.beskrivning?.beskrivning }</p>
                      <Link to={ `/${event.slug}` }><div>Boka</div></Link>
                    </div>
                    <Img fluid={event.eventbild.fluid} className='bokningImg' alt='bokning'></Img>
                  </div>
                </li>
                )
            })}
          </ul>
        </div>
    </Layout>
  )
}

export default Aktuellt;
