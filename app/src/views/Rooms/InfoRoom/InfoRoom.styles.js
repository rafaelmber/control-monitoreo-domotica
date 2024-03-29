import styled from 'styled-components';
const StyledInfoRoom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .room__header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .room__id {
    color: var(--light-neutral);
    font-style: italic;
  }
  .devices-list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default StyledInfoRoom;
