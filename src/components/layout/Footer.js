import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Footer({ className }) {
  return <div className={className}>&copy; Copyright 2020, SAS Blaise, Tous droits réservés</div>;
}

Footer.propTypes = {
  className: PropTypes.string
};

export default styled(Footer)`
  height: 72px;
  background: #002060;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  margin-top: 3rem;
`;
