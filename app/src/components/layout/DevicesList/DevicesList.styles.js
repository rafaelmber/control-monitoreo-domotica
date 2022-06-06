import styled from 'styled-components';
const StyledDevicesList = styled.li`
  list-style-type: none;
  display: flex;
  gap: 10px;
  box-shadow: 0 2px var(--lightest-secundary);
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  .device-info {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    gap: 10px;
  }

  .device-info__link {
    text-decoration: none;
    color: var(--neutral);
    display: flex;
    flex-direction: column;
  }
  .children {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .device-info__details {
    display: flex;
    flex-direction: column;
  }
`;
export default StyledDevicesList;
