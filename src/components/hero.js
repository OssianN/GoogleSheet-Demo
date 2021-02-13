import React from 'react';
import '../styles/hero.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Hero = props => {
  return (
    <div className='hero'>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        isPlaying={true}
        interval={3000}
      >
        <Slider>
          <Slide index={0}>
            <img src={props.img1.src} alt={props.img1.title}></img>
            <div className="heroText">
              <h3>{props.img1.title}</h3>
              <p>{props.img1.text}</p>
            </div>
          </Slide>
          <Slide index={1}>
            <img src={props.img2.src} alt={props.img2.title}></img>
            <div className="heroText">
              <h3>{props.img2.title}</h3>
              <p>{props.img2.text}</p>
            </div>
          </Slide>
          <Slide index={2}>
            <img src={props.img3.src} alt={props.img3.title}></img>
            <div className="heroText">
              <h3>{props.img3.title}</h3>
              <p>{props.img3.text}</p>
            </div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default Hero;
