import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

function QuickAction({ className, title, message, onActionClick }) {
  return (
    <div className={className}>
      <div>{message}</div>
      <Button onClick={onActionClick}>{title}</Button>
    </div>
  );
}

QuickAction.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  onActionClick: PropTypes.func.isRequired
};

export default styled(QuickAction)`
  position: relative;

  @media (max-width: 760px) {
    display: none;
  }

  > div {
    background: rgba(256, 256, 256, 0.73);
    color: #002060;
    padding: 2rem 1.5rem;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 500;
  }

  > button {
    position: absolute;
    bottom: -2rem;
    left: 1.5rem;
  }
`;
