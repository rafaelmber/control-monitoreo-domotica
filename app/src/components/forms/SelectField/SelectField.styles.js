import styled from 'styled-components';

const StyledSelectField = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;

  .select-label {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .select-box {
    background-color: var(--light-secundary);
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    font-size: 1rem;
    width: 100%;
  }
`;

export default StyledSelectField;
