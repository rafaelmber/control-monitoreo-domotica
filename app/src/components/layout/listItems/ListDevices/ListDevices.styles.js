import styled from 'styled-components';

const StyledListDevices = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 5px;
  align-items: center;
  border-bottom: 1px solid var(--lightest-secundary);
  cursor: pointer;
  .icon {
    fill: var(--light-neutral);
  }
  .container {
    flex-grow: 3;
  }
  .name-device {
    margin: 0;
  }
  .type-device {
    color: var(--light-neutral);
  }
  .status {
    flex-grow: 1;
  }
  &:hover {
    transform: scale(0.95);
  }
`;

export default StyledListDevices;
