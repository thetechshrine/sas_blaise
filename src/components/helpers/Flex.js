import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: center;
`;
