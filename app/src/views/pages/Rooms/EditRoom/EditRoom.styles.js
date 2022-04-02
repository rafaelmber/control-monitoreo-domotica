import styled from 'styled-components';

const StyledEditRoom = styled.div`
  .save-button {
    padding: 0px 30%;
  }
  .field {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    margin-bottom: 10px;
  }
  .name-label {
    font-weight: bold;
    flex-grow: 1;
  }
  .name-input {
    flex: 2;
    font-size: 1.56rem;
    border: none;
    border-bottom: 1px solid var(--light-neutral);
    border-radius: 1px;
    padding: 5px;
  }
`;

export default StyledEditRoom;
