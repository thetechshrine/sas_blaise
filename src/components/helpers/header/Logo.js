import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logoIcon from '../../../images/icons/logo.svg';

function Logo({ className }) {
  return (
    <div className={className}>
      <img src={logoIcon} alt='logo' />
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string
};

export default styled(Logo)`
  display: flex;
  padding: 10px 0;

  > img {
    height: 42px;
  }
`;
