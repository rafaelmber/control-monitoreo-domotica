import styled from 'styled-components';

const StyledMainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  color: var(--lightest-neutral);
  padding: 5px 10px;

  .button {
    border: none;
    padding: 0;
    background-color: transparent;
    width: 54px;
    height: 54px;
  }
  .icon {
    fill: var(--lightest-neutral);
    width: 100%;
    height: 100%;
  }
`;

export default StyledMainHeader;
