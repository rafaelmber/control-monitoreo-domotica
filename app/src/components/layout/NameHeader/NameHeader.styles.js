import styled from 'styled-components';

const StyledNameHeader = styled.div`
  box-sizing: border-box;
  .header {
    margin-top: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: 4fr 1fr;
  }

  .icons {
    box-sizing: border-box;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-logo {
    height: 2.5rem;
    width: 2.5rem;
    fill: var(--primary);
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));
  }
  .lamp {
    position: relative;
    right: 10px;
  }
  .chair {
    position: relative;
    left: 10px;
  }
  .title {
    box-sizing: border-box;
    color: var(--primary);
    font-style: italic;
    text-align: center;
    filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.2));
    height: max-content;
  }
`;

export default StyledNameHeader;
