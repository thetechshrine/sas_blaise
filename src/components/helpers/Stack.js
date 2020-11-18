import styled from 'styled-components';

function getFlexDirection({ direction }) {
  if (direction === 'vertical') return 'column';

  return 'row';
}

export default styled.div`
  display: flex;
  flex-direction: ${(props) => getFlexDirection(props)};

  > * {
    margin-left: ${(props) => props.spacing || '16px'};

    :first-child {
      margin-left: 0;
    }
  }
`;
