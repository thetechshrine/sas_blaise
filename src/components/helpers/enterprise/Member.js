import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Member({ className, name, role }) {
  return (
    <div className={className}>
      <div />
      <div>
        <span>{name}</span>
        <span>{role}</span>
      </div>
    </div>
  );
}

Member.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string
};

export default styled(Member)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  > div {
    :first-child {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: #c4c4c4;
    }

    :last-child {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      > span {
        color: #1b3b7a;

        :first-child {
          font-size: 18px;
          font-weight: 600;
        }

        :last-child {
          margin-top: 8px;
        }
      }
    }
  }
`;
