import React from 'react';

import Stack from '../helpers/Stack';
import Text from '../helpers/Text';
import ServicesContainer from '../helpers/services/ServiceContainer';
import List from '../helpers/services/List';
import Navigation from '../layout/Navigation';

function AirConditioning() {
  return (
    <Stack direction='vertical' spacing='0px'>
      <Navigation />

      <ServicesContainer>
        <Text>
          Habitat, tertiaire, industrielle vous trouverez toujours une climatisation pour répondre à un problème de
          chaleur ou de froid.
        </Text>
        <Text>La climatisation se décline en de nombreux systèmes : </Text>
        <List
          className='mt-2'
          items={[
            'Froid seul',
            'Réversible',
            'Installation double tubes',
            'Installation triple tubes',
            'Equipement mono split ou multi split '
          ]}
        />
        <Text className='mt-3'>
          Suite à un bilan thermique de votre installation, notre société vous proposera une solution qui s’adapte à
          votre projet.
        </Text>
      </ServicesContainer>
    </Stack>
  );
}

export default AirConditioning;
