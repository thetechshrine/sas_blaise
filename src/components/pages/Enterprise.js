import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Stack from '../helpers/Stack';
import MainSection from '../helpers/MainSection';
import Text from '../helpers/Text';
import Member from '../helpers/enterprise/Member';
import Navigation from '../layout/Navigation';

const members = [
  { name: 'BOUCHAHOUA Khaled', role: 'Président' },
  { name: 'OUKRINE Nordine', role: 'Directeur général' },
  { name: 'DINIS Lucy', role: 'Responsable administratif et financier' },
  { name: 'CLOQUET Jessica', role: 'Assistante Direction' },
  { name: 'DEMANGE Laetitia', role: 'Responsable Achat & Travaux ' },
  { name: 'SABANI Kefli', role: 'Gestion du magasin' },
  { name: 'LIARD Christophe ', role: 'Responsable Etudes' },
  { name: 'BLAISE Johnny', role: 'Responsable Technique & Opérationnel ' },
  { name: 'YAHAMETI Cyril', role: 'Contrôle étude & méthodes' },
  { name: 'BENBAKLI Mokrane', role: 'Chargé d’affaire travaux collectifs' }
];

function displayMembers() {
  return (
    <Row>
      {members.map(({ name, role }, index) => (
        <Col md='3' key={index}>
          <Member name={name} role={role} />
        </Col>
      ))}
    </Row>
  );
}

function Enterprise() {
  return (
    <Stack direction='vertical' spacing='0px'>
      <Navigation />

      <MainSection title='Présentation'>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nulla porro magnam soluta non. Rerum, molestias
          dolorum? Magni quo voluptates quibusdam repellat harum repudiandae tempora quasi itaque. Ipsum possimus sunt
          voluptatem mollitia, cupiditate, modi deleniti natus quo magni vero sapiente unde error provident quidem enim
          quos consequuntur, praesentium earum soluta! Quos, animi quaerat exercitationem quo alias voluptate
          accusantium quam totam et officia autem, veritatis culpa suscipit beatae minima sint. Earum dolorum nobis
          incidunt ipsam laboriosam quae dicta non, culpa in. Fugit voluptates minima quasi corporis mollitia nulla
          architecto rem alias, porro enim, vel pariatur nostrum sunt sint eius dolore autem commodi aperiam quia totam
          saepe, est quo! Magni ipsum omnis cupiditate quas iusto, aut quasi accusantium nulla, distinctio corrupti
          minima dolorum voluptates doloribus nam molestias dicta ipsam labore consequatur laboriosam, sapiente rerum
          impedit error inventore ea! Commodi eligendi nostrum consequuntur, beatae ipsam nesciunt dolorum recusandae
          voluptatum necessitatibus itaque sequi quam sint quidem. Hic mollitia repudiandae quisquam, minima explicabo
          quo ex ipsam perferendis deserunt error fugit at cum? Consectetur labore, nulla nihil, quaerat doloribus id
          excepturi quis, laboriosam possimus rem obcaecati optio? Libero numquam maxime eveniet facere quo, autem
          aliquam at cumque cum voluptatem corrupti? Expedita eligendi praesentium atque ad ex veniam distinctio
          repellendus velit nesciunt excepturi, ab quidem eius necessitatibus fugit unde delectus voluptates rerum
          cumque repudiandae? Ex dolorem nobis praesentium. Obcaecati sed velit esse, veritatis quam ab aliquid
          voluptate alias quaerat. Possimus perspiciatis eligendi natus rerum sed ea beatae unde, nam consequatur ut
          doloribus repudiandae iusto eos, at distinctio voluptate debitis alias blanditiis autem? Esse in nisi soluta
          fuga, totam officiis adipisci voluptate beatae consectetur veniam commodi quis ducimus asperiores magnam ad
          provident recusandae facilis, doloribus odit ex? Dolor fugiat perferendis ut perspiciatis nobis deserunt in,
          ea voluptatem, doloremque, inventore dignissimos earum! Perferendis vel eveniet, dignissimos hic ratione nam.
        </Text>
      </MainSection>

      <MainSection title='Notre équipe'>{displayMembers()}</MainSection>
    </Stack>
  );
}

export default Enterprise;
