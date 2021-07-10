import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'content';
  width: 100%;
  height: 100%;
  .header {
    grid-area: header;
  }
  .content {
    grid-area: content;
    height: 100%;
    overflow: scroll;
    padding: 10px 15px;
  }
`;
export default StyledWrapper;
