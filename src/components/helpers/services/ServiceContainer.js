import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function ServiceContainer({ className, children }) {
  return <Container className={className}>{children}</Container>;
}

ServiceContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default styled(ServiceContainer)`
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 760px) {
    padding: 3rem 2rem;
  }
`;
