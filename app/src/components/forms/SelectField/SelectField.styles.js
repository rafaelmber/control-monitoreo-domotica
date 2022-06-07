import styled from 'styled-components';

const StyledSelectField = styled.div`
  position: relative;
  .list-title {
    border-radius: 10px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    padding: 10px 5px;
    background-color: var(--secundary);
  }
  .list-items {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    background-color: var(--lightest-neutral);
    padding: 10px 5px;
    border-radius: 10px;
    border-top: none;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    z-index: 2;
    width: 90%;
  }
  .item {
    margin-top: 10px;
    padding: 10px 5px;
    box-shadow: 0 1px rgba(0, 0, 0, 0.05);
  }
`;

export default StyledSelectField;
