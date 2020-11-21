import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ItemService({ className, icon, title, message }) {
  return (
    <div className={className}>
      <div>
        <img src={icon} alt='' />
      </div>
      <span>{title}</span>
      <p>{message}</p>
    </div>
  );
}

ItemService.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  message: PropTypes.string
};

export default styled(ItemService)`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: #002060;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  > span {
    display: inline-block;
    padding: 1rem 0;
    color: #1b3b7a;
    font-weight: 500;
    text-transform: uppercase;
  }

  > p {
    text-align: center;
    padding: 0.5rem 1rem;
  }
`;
