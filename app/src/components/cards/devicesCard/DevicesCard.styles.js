import styled from 'styled-components';

const StyledDevicesCard = styled.div`
  .card-header {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid rgba(75, 79, 79, 0.5);
    margin-bottom: 10px;
  }
  .card-header__title {
    margin: 0;
    margin-right: 10px;
  }
  .card-header__link {
    text-decoration: none;
    color: inherit;
  }
  .card__groups {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default StyledDevicesCard;
