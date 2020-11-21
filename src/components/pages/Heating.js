import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Stack from '../helpers/Stack';
import Text from '../helpers/Text';
import ServicesContainer from '../helpers/services/ServiceContainer';
import Title from '../helpers/services/Title';
import List from '../helpers/services/List';
import Navigation from '../layout/Navigation';

function Heating() {
  return (
    <Stack direction='vertical' spacing='0px'>
      <Navigation />

      <ServicesContainer>
        <Text>
          Le bon choix d’un système de chauffage passe d’abord par un bilan thermique des locaux ou de l’habitation.
          Suite à ce bilan thermique, notre société vous proposera une gamme d’équipements répondant à vos besoins de
          chauffage.
        </Text>
        <Text>
          Différents modes de production de chaleur et de chauffage s’adaptent à vos locaux et à votre décoration.
        </Text>
        <Row className='mt-2'>
          <Col md='6'>
            <Title>Les chauffages électriques</Title>
            <List
              className='mt-2'
              items={[
                'Convecteur',
                'Panneau rayonnant',
                'Radiateur inertie',
                'Radiateur caloporteur',
                'Radiateur à  accumulation',
                'Plancher chauffant électrique',
                'Aérotherme, rideau d’air chaud '
              ]}
            />
          </Col>
          <Col md='6'>
            <Title>Le chauffage central dépend d’une production d’eau chaude réalisée par différentes sources </Title>
            <List
              className='mt-2'
              items={['Chaudière électrique', 'Pompe à chaleur', 'Chaudière bois ou céréales', 'Solaire thermique']}
            />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col md='6'>
            <Title>La gestion d’énergie source d’économie</Title>
            <List className='mt-2' items={['Thermostat', 'Programmateur', 'Délestage']} />
          </Col>
          <Col md='6'>
            <Title>Cette production d’eau chaude est diffusée dans des émetteurs </Title>
            <List
              className='mt-2'
              items={['Radiateur à eau', 'Radiateur ventilo convecteur', 'Plancher chauffant eau']}
            />
          </Col>
        </Row>
      </ServicesContainer>
    </Stack>
  );
}

export default Heating;
