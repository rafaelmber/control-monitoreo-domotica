import styled from 'styled-components';
const StyledInfoRoom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .room__header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .devices-list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .group-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;
    justify-content: space-around;
  }
`;

export default StyledInfoRoom;
