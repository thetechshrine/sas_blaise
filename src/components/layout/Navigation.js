import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import showCaseThreeImage from '../../images/showcase-3.png';

const routeNames = {
  accueil: 'Accueil',
  entreprise: "L'entreprise",
  services: 'Nos services',
  plomberie: 'Plomberie',
  chauffage: 'Chauffage',
  climatisation: 'Climatisation',
  ventilation: 'Ventilation',
  realisations: 'Nos réalisations',
  contact: 'Contact '
};

function displayNavigation(pathname) {
  const routes = pathname.split('/');
  routes[0] = 'accueil';

  function handleLinkClick(evt, index) {
    if (index === routes.length - 1) evt.preventDefault();
  }

  return (
    <div>
      {routes.map((route, index) => (
        <Link
          key={index}
          to={`/${route}`}
          className={index === routes.length - 1 ? 'active' : 'inactive'}
          onClick={(evt) => handleLinkClick(evt, index)}
        >
          {routeNames[route]}
        </Link>
      ))}
    </div>
  );
}

function getCurrentPageName(pathname) {
  const routes = pathname.split('/');

  return routeNames[routes[routes.length - 1]];
}

function Navigation({ className }) {
  const history = useHistory();

  return (
    <div className={className}>
      <div />
      <div>
        <h5>{getCurrentPageName(history.location.pathname)}</h5>
        {displayNavigation(history.location.pathname)}
      </div>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string
};

export default styled(Navigation)`
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;

  > div {
    :first-child {
      position: absolute;
      top: 0;
      left: 0;
      height: 182px;
      width: 100%;
      background-image: url(${showCaseThreeImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(15px);
      --webkit-filter: blur(15px);
    }

    :last-child {
      flex: 1;
      z-index: 1;
      background-color: rgba(100, 152, 216, 0.089);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > h5 {
        color: #002060;
        font-weight: 800;
        font-size: 28px;
        text-transform: uppercase;
      }

      > div {
        display: flex;
        align-items: center;

        > a {
          text-decoration: none;
          display: inline-block;

          &.active {
            color: #ffffff;
          }

          &.inactive {
            color: #d1d4db;
            display: flex;
            justify-content: center;
            align-items: center;

            ::after {
              content: '→';
              font-size: 22px;
              margin-left: 1rem;
            }
          }

          :not(:last-child) {
            margin-right: 1rem;
          }
        }
      }
    }
  }
`;
