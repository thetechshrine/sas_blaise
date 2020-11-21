import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Project({ className, title, description, images = [], onOpenGallery }) {
  function handleOpenGalery() {
    onOpenGallery({ images });
  }

  return (
    <div className={className}>
      <div>
        <span>{title}</span>
        <span>{description}</span>
        <button onClick={handleOpenGalery}>Voir la galerie</button>
      </div>
    </div>
  );
}

Project.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
  onOpenGallery: PropTypes.func
};

export default styled(Project)`
  background-image: url(${(props) => props.images[0]});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 380px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :hover {
    > div {
      opacity: 1;
    }
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
    background: rgba(100, 152, 216, 0.503);
    opacity: 0;
    transition: all 300ms ease;

    > span {
      color: #ffffff;
      text-align: center;
      display: inline-block;

      :first-child {
        font-weight: 700;
        margin-bottom: 0.5rem;
        font-size: 18px;
      }
    }

    > button {
      display: inline-block;
      border: none;
      background: #ffffff;
      padding: 0.55rem 0.7rem;
      text-transform: uppercase;
      color: rgb(100, 152, 216);
      font-size: 14px;
      font-weight: 600;
      margin-top: 1rem;
      transition: all 200ms ease-in-out;

      :focus {
        outline: none;
        box-shadow: none;
      }

      :hover {
        background: #002060;
        color: #ffffff;
      }
    }
  }
`;
