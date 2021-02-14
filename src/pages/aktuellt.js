import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Bokning from '../components/bokning';
import images from '../images';
import '../styles/base.scss';

const Aktuellt = () => {

  const bookning1 = `Svenska belysningssallskapet inbjuder till mobiloperatören 3s nya huvudkontor. Ett flertal välkända företag har flyttat till nya lokaler nyligen. I oktober besökte Svenska Belysningssällskapet ICAs nya huvudkontor och nu är det dags för nästa kontorsbesök: Tid: måndagen 3 februari kl. 17:30. Plats: Entrétorget 5 vid Globen, Stockholm. Ett dynamiskt och energirikt inrednings- och belysningskoncept speglar det nya huvudkontoret…`
  
  return (
    <Layout>
        <Helmet title='SBS Aktuellt' />
        <div className="wrapper tabWrapper">
          <h2 className="section-headline">Aktuellt</h2>
          <ul className='bokningsLista'>
            <li>
              <Bokning
                title='Visning av mobiloperatören 3s nya huvudkontor'
                text={bookning1}
                img={images.bokning1}
              />
            </li>
            <li>
              <Bokning
                title='Inbjuder till en presentation av årets stora förtjänstpristagare Aleksander Stratimirovic arbete & julavslutningsmingel'
                text='Aleksandra Stratimirovic är årets pristagare av Svenssons Stora Förtjänstpriset. Hon har en bred verksamhet inom ljuskonst och har med sina verk – med ljus som främsta uttryck – bidragit till en mänskligare miljö inom offentliga miljöer, äldreboenden, sjukhus, skolor och bostadsområden. Under kvällen får vi höra Aleksandra berätta om sitt arbete och se henne visa…'
                img={images.bokning2}
              />
            </li>
            <li>
              <Bokning
                title='Svenska Belysningssällskapet inbjuder till årsmöte'
                text='Svenska Belysningssällskapet inbjuder till årsmöte och medlemsvisning av prisbelönta Biomedicum! Vi träffas tisdagen den 5 november kl. 16:45 – Plats: Karolinska Institutet, Biomedicum, Solna Biomedicinsk forskning i världsklass har fått ett nytt hus, också det i världsklass. Karolinska Institutets nya Biomedicum är ett av Europas största forskningslaboratorier och en plats som främjar möten, samarbete och…'
                img={images.bokning3}
              />
            </li>
          </ul>
        </div>
    </Layout>
  )
}

export default Aktuellt;
