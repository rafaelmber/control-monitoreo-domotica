import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'content';
  width: 100%;
  height: 100%;
  .header {
    grid-area: header;
  }
  .header__link {
    text-decoration: none;
    color: var(--lightest-neutral);
  }
  .content {
    grid-area: content;
    height: 100%;
    overflow: scroll;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1366) {
    grid-template-columns: 2rem 1fr;
  }
`;
export default StyledWrapper;
