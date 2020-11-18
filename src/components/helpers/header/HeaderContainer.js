import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 0 rgba(0, 32, 96, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  > div {
    :first-child {
      padding: 17.5px 0;
      background-color: #f5f5f5;

      @media (max-width: 760px) {
        > div {
          > div {
            flex-direction: column;

            > :first-child {
              padding: 0 1rem;
            }

            > :last-child {
              margin-top: 1rem;
            }
          }
        }
      }
    }

    :last-child {
      background: #ffffff;

      > div {
        > nav {
          padding: 0;

          @media (max-width: 760px) {
            padding: 1rem 0;
          }

          a.menu {
            text-transform: uppercase;
            margin-left: 2rem;
            color: #848ca2;
            font-weight: 400;
            height: 72px;
            display: flex;
            align-items: center;
            position: relative;
            text-decoration: none;
            transition: color 200ms ease;
            font-size: 14px;

            @media (max-width: 760px) {
              margin: 0;
              padding: 1rem 0;
              height: initial;
            }

            ::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 5px;
              background-color: #ffffff;
              transition: all 500ms ease;
            }

            &.active {
              color: #2499d8;
              font-weight: 800;

              ::after {
                content: '';
                width: 100%;
                background-color: #2499d8;
              }
            }

            :hover {
              color: #2499d8;

              ::after {
                content: '';
                width: 100%;
                background-color: #2499d8;
              }
            }
          }
        }
      }
    }
  }
`;
