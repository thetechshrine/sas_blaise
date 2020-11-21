import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ItemContact({ className, icon, children }) {
  return (
    <div className={className}>
      <header>
        <img src={icon} alt='' />
      </header>
      <main>{children}</main>
    </div>
  );
}

ItemContact.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default styled(ItemContact)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f5f5f5;
  min-height: 184px;

  > header {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #002060;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      text-align: center;
    }
  }
`;
