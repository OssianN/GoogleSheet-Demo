import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from "../components/hero";
import images from '../images';
import '../styles/base.scss';

const Home = () => {
  const imgArr = [
    {
      src: 'https://belysningssallskapet.se/wp-content/uploads/2019/04/st_petri_kyrka-e6a810d81bd_beskuren.jpg',
      title: 'S:t Petri kyrka, Malmö',
      text: 'Nominerad till Ljuspriset 2019'
    },
    {
      src: 'https://belysningssallskapet.se/wp-content/uploads/2019/04/pumpstationen_p42_lulea_c4a220c54624_beskuren.jpg',
      title: 'Pumpstationen P42, Havsstrand, Luleå',
      text: 'Finalist till Ljuspriset 2019'
    },
    {
      src: 'https://belysningssallskapet.se/wp-content/uploads/2019/04/japanska_badet_yasurag_beskuren.jpg',
      title: 'Japanska badet på Yasuragi',
      text: 'Finalist till Ljuspriset 2019'
    }
  ];

  return (
    <Layout>
        <Helmet title='Svenska Belysningssällskapet'/>
        <Hero 
          img1={imgArr[0]}
          img2={imgArr[1]}
          img3={imgArr[2]}
        />
        <div className="wrapper">
          <h2 className="section-headline">Välkommen till Svenska Belysningssällskapet</h2>
          <div className="twoColumn">
            <p>
              <b className="bolderText">Svenska Belysningssällskapet är en ideell förening</b> som arbetar för kunskap, kreativitet och utveckling inom belysningsområdet samt för att öka insikten om ljusets betydelse för den totala miljön.
              Vi arrangerar och bjuder in till möten, föredrag och debatter om aktuella ämnen liksom studiebesök på intressanta projekt. Vi är en av arrangörerna för den årligen återkommande tävlingen Svenska Ljuspriset.
              <br />
              <br />
            </p>
            <p>
              <b className="bolderText">Vi har drygt 500 medlemmar.</b> Bland oss finns arkitekter, inredare, tillverkare, el- och belysningskonsulter, läkare, optiker och skyddsingenjörer. Som medlem får du också tidningen Ljuskultur 6 gånger per år.
              <br />
              <br />
              <b className="bolderText">Belysningssällskap finns också i Malmö och Göteborg.</b> Som medlem i Svenska Belysningssällskapet får du deltar i våra systersällskapens arrangemang till medlemspris. 
            </p>
          </div>
          <h2 className='bliMedlemHeader hideMobile'>Medlem i belysningssällskapet 
          <span style={{fontSize: '.7em', fontWeight: '200'}}> <br />
          – arrangemang och prenumeration</span></h2>
          <div className='bliMedlem'>
            <div className='bliMedlemText'>
              <p>Bli medlem i Belysningssällskapet och få möjlighet att delta i våra intressanta arrangemang och aktiviteter. Aktuella händelser och arrangemang hos Svenska Belysningssällskapet. Anmäl dig och boka här. Reducerat pris för medlemmar. I medlemspriset ingår en prenumeration av tidningen Ljuskultur.
                <br />
                <br />
                <Link to="/medlemskap/">Bli medlem här &#x203A;</Link>
              </p>
            </div>
            <h2 className='bliMedlemHeader hideDesktop'>Medlem i belysningssällskapet 
          <span style={{fontSize: '.7em', fontWeight: '200'}}> <br />
          – arrangemang och prenumeration</span></h2>
            <img className='bliMedlemImg' alt='bli medlem' src={images.bliMedlem}></img>
          </div>
          <h2>Tipsa oss</h2>
          <div>
            <p>
            Spännande ljusprojekt och diskussionsämnen. Det finns många spännande ljusprojekt, platser och diskussionsämnen. Tipsa oss gärna om bra och aktuella arrangemang, studiebesök och ämnen som vi skulle kunna arrangera och diskutera tillsammans med våra medlemmar.
            <br />
            <br />
            <Link to="/tips/">Tipsa oss &#x203A;</Link>
            </p>
          </div>
        </div>
    </Layout>
  )
}

export default Home;
