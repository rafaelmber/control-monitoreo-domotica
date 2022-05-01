import styled from 'styled-components';

const StyledMainHeader = styled.header`
  background-color: var(--primary);
  color: var(--lightest-neutral);
  display: flex;
  padding: 5px 10px;

  justify-content: space-between;
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
