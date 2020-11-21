import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import a1 from '../../images/project_1/1.PNG';
import a2 from '../../images/project_1/2.PNG';
import a3 from '../../images/project_1/3.PNG';
import a4 from '../../images/project_1/4.PNG';
import a5 from '../../images/project_1/5.PNG';
import a6 from '../../images/project_1/6.PNG';
import a7 from '../../images/project_1/7.PNG';

import b1 from '../../images/project_2/1.PNG';
import b2 from '../../images/project_2/2.PNG';
import b3 from '../../images/project_2/3.PNG';
import b4 from '../../images/project_2/4.PNG';
import b5 from '../../images/project_2/5.PNG';
import b6 from '../../images/project_2/6.PNG';
import b7 from '../../images/project_2/7.PNG';
import b8 from '../../images/project_2/8.PNG';
import b9 from '../../images/project_2/9.PNG';
import b10 from '../../images/project_2/10.PNG';
import b11 from '../../images/project_2/11.PNG';
import b12 from '../../images/project_2/12.PNG';

import c1 from '../../images/project_3/1.PNG';
import c2 from '../../images/project_3/2.PNG';
import c3 from '../../images/project_3/3.PNG';
import c4 from '../../images/project_3/4.PNG';
import c5 from '../../images/project_3/5.PNG';
import c6 from '../../images/project_3/6.PNG';
import c7 from '../../images/project_3/7.PNG';

import d1 from '../../images/project_4/1.PNG';

import e1 from '../../images/project_5/1.PNG';
import e2 from '../../images/project_5/2.PNG';
import e3 from '../../images/project_5/3.PNG';

import Stack from '../helpers/Stack';
import MainContainer from '../helpers/MainContainer';
import Project from '../helpers/realisations/Project';
import Gallery from '../helpers/realisations/Gallery';
import Navigation from '../layout/Navigation';

const projects = [
  {
    title: 'Réseaux enterrés AIRBUS Les Mureaux (78)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint sequi ducimus vero voluptatem exercitationem magnam cupiditate similique illum id, odio porro natus amet?',
    images: [a1, a2, a3, a4, a5, a6, a7]
  },
  {
    title: 'La Belle Gamelle à Montreuil (93)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint sequi ducimus vero voluptatem exercitationem magnam cupiditate similique illum id, odio porro natus amet?',
    images: [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12]
  },
  {
    title: 'Groupe froid Ariane espace Vernon (27)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint sequi ducimus vero voluptatem exercitationem magnam cupiditate similique illum id, odio porro natus amet?',
    images: [c1, c2, c3, c4, c5, c6, c7]
  },
  {
    title: 'Chaufferie préfabriquée SAGEMCOM Rueil Malmaison (92)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint sequi ducimus vero voluptatem exercitationem magnam cupiditate similique illum id, odio porro natus amet?',
    images: [e1, e2, e3]
  },
  {
    title: 'CIAT Ventilation Hygiénique Thiverval Grignon (78)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint sequi ducimus vero voluptatem exercitationem magnam cupiditate similique illum id, odio porro natus amet?',
    images: [d1]
  }
];

function displayProjects(handleOpenGallery) {
  return (
    <Row>
      {projects.map(({ title, description, images }, index) => (
        <Col md='6' key={index} className='no-space'>
          <Project title={title} description={description} images={images} onOpenGallery={handleOpenGallery} />
        </Col>
      ))}
    </Row>
  );
}

function Achievements() {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  function handleOpenGallery({ images }) {
    setSelectedImages(images);
    setOpen(true);
  }

  return (
    <>
      <Stack direction='vertical' spacing='0px'>
        <Navigation />

        <MainContainer>{displayProjects(handleOpenGallery)}</MainContainer>
      </Stack>

      <Gallery open={open} images={selectedImages} onClose={() => setOpen(false)} />
    </>
  );
}

export default Achievements;
