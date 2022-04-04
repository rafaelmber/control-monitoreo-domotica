import styled from 'styled-components';

const StyledListDevices = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 5px;
  align-items: center;
  border-bottom: 1px solid var(--lightest-secundary);
  cursor: pointer;
  .arrow-icon {
    fill: var(--light-neutral);
  }
  .container {
    flex-grow: 4;
  }
  .name-device {
    margin: 0;
  }
  .type-device {
    color: var(--light-neutral);
  }
  .status {
    flex-grow: 2;
  }
  .children {
    flex-grow: 1;
    flex-basis: 0;

    margin-left: 10px;

    & button {
      width: auto;
    }
  }
  &:hover {
    transform: scale(0.98);
  }
`;

export default StyledListDevices;
