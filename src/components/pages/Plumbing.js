import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Stack from '../helpers/Stack';
import Text from '../helpers/Text';
import ServicesContainer from '../helpers/services/ServiceContainer';
import Title from '../helpers/services/Title';
import List from '../helpers/services/List';
import Navigation from '../layout/Navigation';

function Plumbing() {
  return (
    <Stack direction='vertical' spacing='0px'>
      <Navigation />

      <ServicesContainer>
        <Text>Pour votre confort, notre société réalise différents types d’installations</Text>
        <Row className='mt-2'>
          <Col md='6'>
            <Title>Les équipements sanitaires</Title>
            <List
              className='mt-2'
              items={[
                'Les WC',
                'Les lavabos',
                'Les douches',
                'Les baignoires',
                'Les éviers',
                'Les robinetteries',
                'Equipement eau chaude sanitaire',
                'Traitement des eaux',
                'Ballon thermique ou solaire',
                'Pompe de puits ou eau pluviale'
              ]}
            />
          </Col>
          <Col md='6'>
            <Title>La distribution d’eau des équipements</Title>
            <List
              className='mt-2'
              items={[
                'Distribution classique en cuivre',
                'Distribution polyéthylène',
                'Distribution de canalisation de type galvanisé',
                "Réseau d'eau",
                "Réseau d'air comprimé"
              ]}
            />
          </Col>
        </Row>
      </ServicesContainer>
    </Stack>
  );
}

export default Plumbing;
