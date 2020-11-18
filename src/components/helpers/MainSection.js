import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function MainSection({ className, title, children }) {
  return (
    <Container className={className}>
      <header>
        <span>{title}</span>
      </header>
      <main>{children}</main>
    </Container>
  );
}

MainSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default styled(MainSection)`
  margin: 0 auto;
  padding-top: 2rem;

  > header {
    display: flex;
    justify-content: center;

    > span {
      display: inline-block;
      color: #2499d8;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.5rem 0;
      position: relative;

      ::after {
        content: '';
        position: absolute;
        left: calc(100% / 4);
        right: calc(100% / 4);
        bottom: 0;
        height: 4px;
        background: #2499d8;
      }
    }
  }

  > main {
    padding: 2rem 0;
  }
`;
