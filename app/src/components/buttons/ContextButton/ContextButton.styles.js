import styled from 'styled-components';

const StyledContextButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 15px;

  border: none;
  border-radius: 15px;
  box-shadow: 1px 4px rgba(75, 79, 79, 0.5);
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  font-weight: bold;
  color: ${({ textColor }) => {
    return textColor;
  }};
  .icon {
    fill: ${({ textColor }) => {
      return textColor;
    }};
    max-height: 50px;
  }
  &:hover {
    transform: scale(0.98);
  }
`;

export default StyledContextButton;
