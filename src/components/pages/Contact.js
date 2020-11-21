import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import locationIcon from '../../images/icons/location-white.svg';
import phoneIcon from '../../images/icons/phone-white.svg';
import emailIcon from '../../images/icons/email-white.svg';

import Stack from '../helpers/Stack';
import MainContainer from '../helpers/MainContainer';
import Text from '../helpers/Text';
import Button from '../helpers/Button';
import ItemContact from '../helpers/contact/ItemContact';
import Navigation from '../layout/Navigation';

function Contact() {
  return (
    <Stack direction='vertical' spacing='0px'>
      <Navigation />

      <MainContainer>
        <Row>
          <Col md='4'>
            <ItemContact icon={locationIcon}>
              <Text>26 rue des Perrons, 78130 Les Mureaux</Text>
            </ItemContact>
          </Col>
          <Col md='4'>
            <ItemContact icon={phoneIcon}>
              <Text>Téléphone : 01.30.99.76.21</Text>
              <Text>Fax : 01.30.99.50.21</Text>
            </ItemContact>
          </Col>
          <Col md='4'>
            <ItemContact icon={emailIcon}>
              <Text>Email : contact@blaisesarl.fr</Text>
            </ItemContact>
          </Col>
        </Row>

        <Form className='mt-5' onSubmit={(evt) => evt.preventDefault()}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type='text' placeholder='Nom' />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control type='email' placeholder='Email' />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type='phone' placeholder='Téléphone' />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control type='url' placeholder='Site internet' />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Control as='textarea' rows={5} placeholder='Message' />
          </Form.Group>

          <Button type='submit' size='small'>
            Envoyer un message
          </Button>
        </Form>
      </MainContainer>
    </Stack>
  );
}

export default Contact;
