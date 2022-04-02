import styled from 'styled-components';

const StyledTextField = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
  .field-label {
    font-weight: bold;
    flex-grow: 1;
  }
  .field-input {
    flex: 2;
    font-size: 1.56rem;
    border: none;
    border-bottom: 1px solid var(--light-neutral);
    border-radius: 1px;
    padding: 5px;
  }
`;

export default StyledTextField;
