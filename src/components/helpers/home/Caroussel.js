import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import arrowLeftIcon from '../../../images/icons/arrow-left.svg';
import arrowRightIcon from '../../../images/icons/arrow-right.svg';

function displayImages(images = [], activeImageIndex) {
  return images.map((src, index) => (
    <img key={index} src={src} alt='image' className={index === activeImageIndex ? 'active' : 'inactive'} />
  ));
}

function displayIndicators(images = [], activeImageIndex) {
  return images.map((src, index) => (
    <div key={index} data-src={src} className={index === activeImageIndex ? 'active' : 'inactive'} />
  ));
}

function Caroussel({ className, images, children }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function handleNext() {
    if (activeImageIndex === images.length - 1) setActiveImageIndex(0);
    else setActiveImageIndex(activeImageIndex + 1);
  }

  function handlePrev() {
    if (activeImageIndex === 0) setActiveImageIndex(images.length - 1);
    else setActiveImageIndex(activeImageIndex - 1);
  }

  return (
    <div className={className}>
      <section>
        <header>
          <div onClick={handlePrev}>
            <img src={arrowLeftIcon} alt='' />
          </div>
          <div onClick={handleNext}>
            <img src={arrowRightIcon} alt='' />
          </div>
        </header>
        <main>{displayImages(images, activeImageIndex)}</main>
        <footer>{displayIndicators(images, activeImageIndex)}</footer>
      </section>
      <section>{children}</section>
    </div>
  );
}

Caroussel.propTypes = {
  className: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node
};

export default styled(Caroussel)`
  height: 720px;
  position: relative;

  > section {
    :first-child {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;

      > main {
        position: relative;
        flex: 1;

        > img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 500ms ease;
          opacity: 0;

          &.active {
            visibility: visible;
            opacity: 1;
          }

          &.inactive {
            visibility: hidden;
            opacity: 0;
          }
        }

        ::after {
          content: '';
          position: absolute;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(21, 39, 73, 0.4);
        }
      }

      > header {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > div {
          background-color: rgba(256, 256, 256, 0.73);
          padding: 1.5rem 1rem;
          transition: all 200ms ease;
          cursor: pointer;

          :hover {
            background: rgba(256, 256, 256, 0.53);
          }
        }
      }

      > footer {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding: 2rem 0;

        > div {
          width: 1rem;
          height: 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(256, 256, 256, 0.73);
          margin: 1rem;

          &.active {
            background: rgba(256, 256, 256, 0.73);
          }
        }
      }
    }

    :last-child {
      position: absolute;
      top: 0;
      left: 50px;
      height: 100%;
      width: calc(100% - 100px);
      display: flex;
      align-items: center;
      z-index: 4;
    }
  }
`;
