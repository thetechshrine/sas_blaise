import styled from 'styled-components';

export default styled.button`
  display: inline-block;
  padding: 0.75rem 0.85rem;
  border: none;
  border-radius: 0;
  text-transform: uppercase;
  background: #2499d8;
  color: #ffffff;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover {
    background: #1e78a8;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }
`;
