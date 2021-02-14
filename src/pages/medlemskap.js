import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import images from '../images';
import '../styles/base.scss';

const Medlemskap = () => {
  return (
    <Layout>
        <Helmet title='SBS Medlemskap' />
        <div className="wrapper tabWrapper">
          <h2 className="section-headline">Bli medlem i Svenskap Belysningssällskapet</h2>
          <div className="twoColumn">
            <p>
            <b className="bolderText">I Svenska Belysningssällskapet möter du 500 likasinnade. Alla intresserade av ljus, belysning och arkitektur.</b>
            <br />
            <br />
            Svenska Belysningssällskapet har ca 500 medlemmar, bland dem finns arkitekter, inredare, tillverkare, el- och belysningskonsulter, läkare, optiker och skyddsingenjörer.
            <br />
            <br />
            Som medlem i Svenska Belysningssällskapet får du information och blir bjuden till möten, föredrag och debatter om aktuella ämnen liksom studiebesök på intressanta projekt. Genom ditt medlemskap är du välkommen att delta även i arrangemang och möten hos Syd- och Västsvenska Belysningssällskapet till medlemspris.
            I ditt medlemskap ingår en rabatterad prenumeration av tidningen Ljuskultur, som utkommer med 6 nummer per år.
            Ljuskultur är en facktidskrift som informerar och inspirerar alla som yrkesmässigt sysslar med belysning. Våra läsare är el- och belysningskonsulter, arkitekter, inredare, elinstallatörer och brukare samt fabrikanter. Ljuskultur visar nya belysningsanläggningar, ny teknik och ljusets samspel med arkitektur. Tidningen presenterar också ny forskning och produktnyheter.
            </p>
            <div className="ljuskonsultImgContainer">
              <img className='ljuskonsultImg' alt='ljuskonsult omslag'  src={images.LjuskulturOmslag} />
              <img className='ljuskonsultImg hideDesktop' alt='ljuskonsult 2017' src={images.ljuskultur2_2017} />
              <p>
                I ditt medlemskap i Svenska Belysningssällskapet ingår en prenumeration av tidningen Ljuskultur
              </p>
            </div>
          </div>
          <div className="twoColumn">
            <p>
              <b className="bolderText">Medlemsavgift</b> inkluderar sex nummer av tidningen Ljuskultur: Medlemskap pris <b className="bolderText">507 kr/år</b>.
              <br />
              <br />
              <b className="bolderText">Medlemsavgift studerande, pensionär och arbetslösa</b> inkluderar också sex nummer av tidningen Ljuskultur: Medlemskap pris <b className="bolderText">284 kr/år</b>.
              <br />
              <br />
              <a href="https://ljuskultur.prenservice.se/kodlandning?internetkod=203-203008" >Klicka här för att bli medlem! &#x203A;</a>
            </p>
            <div className='ljuskonsultImgContainer hideMobile'>
              <img className='ljuskonsultImg' alt='ljuskonsult 2017' src={images.ljuskultur2_2017} />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Medlemskap
