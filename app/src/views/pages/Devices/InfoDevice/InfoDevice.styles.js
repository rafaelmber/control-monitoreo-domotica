import styled from 'styled-components';
const StyledInfoDevice = styled.div`
  .field {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    margin-top: 10px;
    & span {
      font-size: 1.25rem;
    }
  }
  .field-property {
    font-weight: bold;
  }
  .field-value {
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;

export default StyledInfoDevice;
