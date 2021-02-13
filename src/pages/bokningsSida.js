import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import images from '../images';
import '../styles/base.scss';

const BokningsSida = props => {
  return (
    <Layout>
        <Helmet title='SBS Om Oss' />
        <div className="tabHero">
          <img src={images.bokning1} alt='bokning1'></img>
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Svenska Belysningssällskapet inbjuder till teleoperatör 3s nya huvudkontor</h2>
          <div className="twoColumn">
            <p>
              <b className="bolderText">Ett flertal välkända företag har flyttat till nya lokaler nyligen. I oktober besökte Svenska Belysningssällskapet ICAs nya huvudkontor och nu är det dags för nästa kontorsbesök:</b>
              <br />
              <br />
              Tid: måndagen 3 februari kl. 17:30
              <br />
              Plats: Entrétorget 5 vid Globen, Stockholm
              <br />
              <br />
              Ett dynamiskt och energirikt inrednings- och belysningskoncept speglar det nya huvudkontoret hos mobiloperatören 3. Studio Stockholm har ansvarat för inredningen och Node Ljusdesign för belysningen. Vi får vara med på en rundvisning och höra om visionerna och tankarna samt och hela processen. Peter Nilsson från Node Ljusdesign samt en representant från Studio Stockholm Arkitekter och 3 medverkar
              <br />
              <br />
            </p>
            <p>
              <b className="bolderText">Program</b>
              <br />
              <br />
              <li>
                <b className="bolderText">Kl. 17.30:</b> Samling för lättare förtäring
                Vi träffas och registrerar oss i receptionen och får där vidare information om lokalen.
              </li>
              <br />
              <br />
              <li>
                <b className="bolderText">Kl. 18:00:</b> Presentation och rundvandring
              </li>
              <br />
              <br />
              <li>
                Diskussion och möjlighet till frågor.
              </li>
              <br />
              <br />
              Visningen är kostnadsfri för SBS medlemmar, icke-medlemmar betalar 300 kr. Bli medlem i SBS här >>
              (Vid utebliven närvaro utan anmälan senast 24 timmar före debiteras en avgift på 100 kr.)
              <br />
              <br />
              Varmt välkommen med din anmälan nedan!
            </p>
          </div>
        </div>
    </Layout>
  )
}

export default BokningsSida;
