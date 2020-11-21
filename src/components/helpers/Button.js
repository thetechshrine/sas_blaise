import styled from 'styled-components';

export default styled.button`
  display: inline-block;
  padding: ${(props) => (props.size === 'small' ? '0.75rem 0.85rem' : '0.85rem 0.95rem')};
  border: none;
  border-radius: 0;
  text-transform: uppercase;
  background: #2499d8;
  color: #ffffff;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  font-size: ${(props) => (props.size === 'small' ? '14px' : '1rem')};
  cursor: pointer;
  line-height: 1;

  :hover {
    background: #1e78a8;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }
`;
