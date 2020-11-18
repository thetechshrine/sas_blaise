import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import showcaseOneImage from '../../images/showcase-1.png';
import showcaseTwoImage from '../../images/showcase-2.png';
import showcaseThreeImage from '../../images/showcase-3.png';
import plumbingIcon from '../../images/icons/plumbing.svg';
import heatingIcon from '../../images/icons/heating.svg';
import airConditioningIcon from '../../images/icons/air-conditioning.svg';
import clientOneImage from '../../images/clients/logo-1.png';
import clientTwoImage from '../../images/clients/logo-2.png';
import clientThreeImage from '../../images/clients/logo-3.png';
import clientFourImage from '../../images/clients/logo-4.png';
import clientFiveImage from '../../images/clients/logo-5.png';
import clientSixImage from '../../images/clients/logo-6.png';
import clientSevenImage from '../../images/clients/logo-7.png';
import clientEigthImage from '../../images/clients/logo-8.png';
import clientNineImage from '../../images/clients/logo-9.png';
import clientTenImage from '../../images/clients/logo-10.png';
import clientElevenImage from '../../images/clients/logo-11.png';
import clientTwelveImage from '../../images/clients/logo-12.png';

import Stack from '../helpers/Stack';
import MainSection from '../helpers/MainSection';
import Caroussel from '../helpers/home/Caroussel';
import QuickAction from '../helpers/home/QuickAction';
import ItemService from '../helpers/home/ItemService';
import Client from '../helpers/home/Client';

function Home() {
  const history = useHistory();

  function handleActionClick() {
    history.push('/contact');
  }

  return (
    <Stack direction='vertical' spacing='0px'>
      <Caroussel images={[showcaseOneImage, showcaseTwoImage, showcaseThreeImage]}>
        <Container>
          <QuickAction
            title='Demander un devis'
            message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis repudiandae. Sapiente veniam quod ab, quidem amet ullam, molestiae officiis deleniti sequi voluptatibus, dolorum harum. Dolore id suscipit molestias odio?'
            onActionClick={handleActionClick}
          />
        </Container>
      </Caroussel>

      <MainSection title='Nos services'>
        <Row>
          <Col sm='4'>
            <ItemService
              title='Plomberie'
              icon={plumbingIcon}
              message='Pour votre confort, notre société réalise différents types d’installations'
            />
          </Col>
          <Col sm='4'>
            <ItemService
              title='Chauffage'
              icon={heatingIcon}
              message='Le bon choix d’un système de chauffage passe d’abord par un bilan thermique des locaux ou de l’habitation. Suite à ce bilan thermique, notre société vous proposera une gamme d’équipements répondant à vos besoins de chauffage'
            />
          </Col>
          <Col sm='4'>
            <ItemService
              title='Climatisation'
              icon={airConditioningIcon}
              message='Habitat, tertiaire, industrielle vous trouverez toujours une climatisation pour répondre à un problème de chaleur ou de froid'
            />
          </Col>
        </Row>
      </MainSection>

      <MainSection title='Nos clients'>
        <Row>
          <Col sm='1' md='3'>
            <Client icon={clientOneImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientTwoImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientThreeImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientFourImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientFiveImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientSixImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientSevenImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientEigthImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientNineImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientTenImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientElevenImage} />
          </Col>
          <Col sm='1' md='3'>
            <Client icon={clientTwelveImage} />
          </Col>
        </Row>
      </MainSection>
    </Stack>
  );
}

export default Home;
