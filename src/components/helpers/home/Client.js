import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Client({ className, icon }) {
  return (
    <div className={className}>
      <img src={icon} alt='' />
    </div>
  );
}

Client.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node
};

export default styled(Client)`
  padding: 2rem;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;
