import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function List({ className, items = [] }) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

List.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
};

export default styled(List)`
  list-style: none;
  padding: 0;
  margin: 0;

  > li {
    display: flex;
    align-items: center;
    color: #1b3b7a;

    :not(:last-child) {
      margin-bottom: 4px;
    }

    ::before {
      content: '';
      height: 6px;
      width: 6px;
      border-radius: 50%;
      margin-right: 8px;
      background: #1b3b7a;
    }
  }
`;
