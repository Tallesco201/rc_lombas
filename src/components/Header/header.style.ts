import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  background: transparent;
  position: absolute;
  z-index: 2;
  width: 100%;

  @media only  screen and (max-width:578px) {  
        flex-direction: column;
        margin-bottom: 100px;
        

      }

  .logoHeader{
    
  }

  @font-face {
    font-family: 'CenturyGothic';
    src: url('/fonts/CenturyGothic.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  

  div{
    width: 100%;
    display: flex;
    justify-content: center;

    nav{
        display: flex;
        gap:79px;

        a{
            font-family:'CenturyGothic' ;
            font-size: 14px;
            color:#ffffff;
            position: relative;
            overflow: hidden;
            z-index: 1;
            transition: color 0.4s ease;
            padding-bottom: 5px;
            cursor: pointer;

            @media only  screen and (max-width:400px) {  
                font-size: 12px;
            }
          }
          a::before { 
              content: " ";
              position: absolute;
              z-index: -1;
              left: 0;
              right: 100%;
              bottom: 0;
              background: #FF0068;
              height: 4px;
              border-radius: 10px;
              transition-property: right;
              transition-duration: 0.4s;
              transition-timing-function: ease-out;
          }
       
            a:hover::before {
                right: 0;
            }
            @media only  screen and (max-width:500px) {  
              gap:35px;
            }
            @media only  screen and (max-width:350px) {  
              gap: 20px;
            }    
  
          
          }



  }
`;
