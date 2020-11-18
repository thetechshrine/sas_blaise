import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import phoneIcon from '../../images/icons/phone.svg';
import emailIcon from '../../images/icons/email.svg';
import addressIcon from '../../images/icons/address.svg';

import Flex from '../helpers/Flex';
import Stack from '../helpers/Stack';
import HeaderContainer from '../helpers/header/HeaderContainer';
import HeaderSection from '../helpers/header/HeaderSection';
import HeaderItem from '../helpers/header/HeaderItem';
import Logo from '../helpers/header/Logo';
import NavLinkDropdown from '../helpers/header/NavLinkDropdown';

function Header() {
  return (
    <HeaderContainer>
      <HeaderSection>
        <Container>
          <Flex justifyContent='space-between'>
            <Stack>
              <HeaderItem icon={phoneIcon} label='01.30.99.76.21' />
              <HeaderItem icon={emailIcon} label='contact@blaisesarl.fr' />
            </Stack>
            <Flex justifyContent='flex-end'>
              <HeaderItem icon={addressIcon} label='contact@blaisesarl.fr' />
            </Flex>
          </Flex>
        </Container>
      </HeaderSection>

      <HeaderSection>
        <Container>
          <Navbar expand='lg'>
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar' className='justify-content-end'>
              <Nav>
                <NavLink className='menu' to='/accueil'>
                  Accueil
                </NavLink>
                <NavLink className='menu' to='/entreprise'>
                  L&apos;entreprise
                </NavLink>
                <NavLinkDropdown
                  to='/services'
                  actions={[
                    { to: '/plomberie', label: 'Plomberie' },
                    { to: '/climatisation', label: 'Climatisation' },
                    { to: '/chauffage', label: 'Chauffage' }
                  ]}
                >
                  Nos services
                </NavLinkDropdown>
                <NavLink className='menu' to='/realisations'>
                  Nos réalisations
                </NavLink>
                <NavLink className='menu' to='/contact'>
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </HeaderSection>
    </HeaderContainer>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
