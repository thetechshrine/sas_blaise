import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

import arrowLeftIcon from '../../../images/icons/arrow-left.svg';
import arrowRightIcon from '../../../images/icons/arrow-right.svg';
import closeIcon from '../../../images/icons/close.svg';

function Gallery({ className, open, images = [], onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function handleNext() {
    if (activeImageIndex === images.length - 1) setActiveImageIndex(0);
    else setActiveImageIndex(activeImageIndex + 1);
  }

  function handlePrev() {
    if (activeImageIndex === 0) setActiveImageIndex(images.length - 1);
    else setActiveImageIndex(activeImageIndex - 1);
  }

  useEffect(() => {
    if (open) {
      document.body.classList.remove('scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.body.classList.add('scroll');
    }
  }, [open]);

  return ReactDOM.createPortal(
    <div className={className}>
      <div>
        <div onClick={handlePrev}>
          <img src={arrowLeftIcon} alt='' />
        </div>
        <main>
          <img src={closeIcon} alt='' onClick={onClose} />
          <img src={images[activeImageIndex]} alt='' />
        </main>
        <div onClick={handleNext}>
          <img src={arrowRightIcon} alt='' />
        </div>
      </div>
    </div>,
    document.getElementById('gallery')
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

export default styled(Gallery)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(21, 39, 73, 0.724);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  overflow-y: auto;
  opacity: 0;
  animation: ${fadeIn} 500ms forwards;

  > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;

    > div {
      background-color: rgba(256, 256, 256, 0.73);
      padding: 1.5rem 1rem;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        background: rgba(256, 256, 256, 0.53);
      }
    }

    > main {
      padding: 0 3rem;
      display: flex;
      flex-direction: column;

      > img {
        display: inline-block;

        :first-child {
          align-self: flex-end;
          margin-bottom: 1rem;
          transition: all 200ms ease;
          cursor: pointer;

          :hover {
            opacity: 0.5;
          }
        }

        :last-child {
          max-height: 100%;
        }
      }
    }
  }
`;
