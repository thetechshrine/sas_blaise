import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function HeaderItem({ className, icon, label }) {
  return (
    <div className={className}>
      <img src={icon} />
      <span>{label}</span>
    </div>
  );
}

HeaderItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string
};

export default styled(HeaderItem)`
  display: flex;
  align-items: center;
  color: #848ca2;
  font-size: 14px;

  > img {
    margin-right: 0.5rem;
    height: 14px;
  }
`;
