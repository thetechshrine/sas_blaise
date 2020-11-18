import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as ArrowDown } from '../../../images/icons/arrow-down.svg';

function NavLinkDropdown({ className, to, actions = [], children }) {
  const history = useHistory();

  function handleActionClick(evt, action) {
    evt.preventDefault();
    history.push(`${to}${action.to}`);
  }

  function handleNavClick(evt) {
    evt.preventDefault();
  }

  return (
    <Dropdown className={className}>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        <NavLink className='menu' to={to} onClick={handleNavClick}>
          <span>{children}</span>
          <ArrowDown />
        </NavLink>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {actions.map((action) => (
          <Dropdown.Item key={action.to} href='/' onClick={(evt) => handleActionClick(evt, action)}>
            {action.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

NavLinkDropdown.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string
    })
  ),
  children: PropTypes.node
};

export default styled(NavLinkDropdown)`
  padding: 0;

  a.menu {
    display: flex;

    > span {
      margin-right: 0.25rem;
    }

    :hover {
      > svg {
        stroke: #2499d8;
      }
    }
  }

  > button {
    background-color: transparent;
    padding: 0;
    border: none;

    &.btn-success.dropdown-toggle {
      background-color: transparent;

      :hover {
        background: transparent;
      }
    }

    ::after {
      content: '';
      display: none;
    }

    :hover {
      background-color: transparent;
    }

    :focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }

  > .dropdown-menu {
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 32, 96, 0.1);
    padding: 0.5rem;
    background: #2499d8;

    > a {
      margin-bottom: 0.5rem;
      color: #ffffff;
      text-decoration: none;
      transition: all 200ms ease;

      :first-child {
        margin-top: 0.5rem;
      }

      :hover {
        background: none;
        color: #002060;
      }

      &.active {
        background-color: transparent;
      }
    }
  }
`;
