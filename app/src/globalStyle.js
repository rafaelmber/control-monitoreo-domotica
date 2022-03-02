import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  --primary: #00AFF0;
  --dark-primary: #0084B4;
  --darkest-primary: #002C3C;
  --light-primary: #40C3F4;
  --lightest-primary: #C0EBFC;

  --secundary: #F07C00;
  --dark-secundary: #B45D00 ;
  --darkest-secundary: #3C1F00 ;
  --light-secundary: #F49D40 ;
  --lightest-secundary: #FCDFC0 ;

  --neutral: #0E1414 ;
  --light-neutral: #4B4F4F ;
  --lightest-neutral: #F8F8F8 ;

  --green: #00D778;
  --dark-green: #006638;
  --red: #FC1F00 ;
  --dark-red: #C02C3C;
}
  body {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  h1{
    font-size: 3rem;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
  h2{
    font-size: 2.44rem;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
  h3{
    font-size: 1.95rem;
    margin: 0;
  }
  h4{
    font-size:1.56rem;
    margin: 0;
  }
  h5{
    font-size:1.25rem;
    margin: 0;
  }
  p{
    font-size: 1rem;
  }
  small{
    font-size: 0.85rem;
  }
  @media screen and (max-width: 330px){
    h1{
      font-size: 2.44rem;
    }
    h2{
      font-size: 1.95rem;
    }
    h3{
      font-size: 1.56rem;
    }
    h4{
      font-size: 1.25rem;
    }
    h5{
      font-size: 1rem;
    }
    p{
      font-size: 0.85rem;
    }
    small{
      font-size: 0.8rem;
    }
  }
  @media screen and (min-width: 1365px){
    h1{
      font-size: 1.95rem;
    }
    h2{
      font-size: 1.56rem;
    }
    h3{
      font-size: 1.25rem;
    }
    h4{
      font-size: 1rem;
    }
    h5{
      font-size: 0.85rem;
    }
    p{
      font-size: 0.8rem;
    }
    small{
      font-size: 0.8rem;
    }
  }
`;

export default GlobalStyle;
