import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from "../components/hero";
import images from '../images';
import '../styles/base.scss';

const BlogIndex = () => {
  return (
    <Layout>
        <Helmet title='template' />
        <Hero 
          title='About hero'
          text='Lorem ipsum dolor sit amet lore.'
          src={images.mockImg}
        />
        <div className="wrapper">
          <h2 className="section-headline">Section</h2>
          <ul>
          </ul>
        </div>
    </Layout>
  )
}

export default BlogIndex
