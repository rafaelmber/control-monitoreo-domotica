import styled from 'styled-components';

const StyledInfoEnvironment = styled.div`
  .columns {
    display: flex;
    justify-content: space-between;

    & span {
      font-weight: bold;
    }
  }
  .buttons {
    display: flex;
    gap: 30px;

    margin-top: 10px;
  }
`;

export default StyledInfoEnvironment;
