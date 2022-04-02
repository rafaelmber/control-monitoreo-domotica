import styled from 'styled-components';
const StyledInfoRoom = styled.div`
  .list {
    padding: 0;
  }
  .buttons-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
  }
  .button {
    width: 100%;
  }
`;

export default StyledInfoRoom;
