import Image from "next/image";
import styled from "styled-components";


export const Background= styled.div`

  background-image: url('/image/fundoEscritorio.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 110vh;
 
  width: 100%;

  @media only  screen and (max-width:798px) {  
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
  


  @media only  screen and (max-width:578px) {  
    justify-content: start;
    align-items: flex-start;

  } 

  @media only  screen and (max-width:350px) {  
      height: 115vh;
  }    


  
  @font-face {
    font-family: 'CenturyGothicBold';
    src: url('/fonts/GOTHICB.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;

}
  
  @font-face {
    font-family: 'CenturyGothic';
    src: url('/fonts/CenturyGothic.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;

}

  .containerGeral{
    display: flex;
    width: 100%;
    height: 50vh;


    @media only  screen and (max-width:798px) {  
    
    justify-content: center;
    align-items: center;
  
  
  } 

  @media only  screen and (max-width:730px) {  
        height: 45vh;

      } 

      @media only  screen and (max-width:578px) {  
        justify-content: start;

      } 
 
  
      

  }
  .containerParagrafo{
    width: 45%;
    padding: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    background-clip: padding-box;


    
    p{
      color: #ffffff;
      font-family: 'CenturyGothic';
      font-size: 14px;
      margin-left: 4%;
      line-height: 25px;
      font-weight: 500;

      @media only  screen and (max-width:730px) {  
        font-size: 11.5px;
        font-weight: 700;
        
      } 
      
      @media only  screen and (max-width:578px) {  
        margin-left: 0%;
        
      }
      
      @media only  screen and (max-width:400px) {  
          font-size:9.5px;
          font-weight: 600;
      }


    }

    @media only  screen and (max-width:1010px) {  
    width:50%;
  } 

    @media only  screen and (max-width:880px) {  
      width: 55%;
    } 

    
    @media only  screen and (max-width:608px) {  
        width: 60%;

      }

      @media only  screen and (max-width:578px) {  
        width: 80%;
        margin-top:5%;
        margin-left: 6%;

      }
      @media only  screen and (max-width:500px) {  
          width: 90%;
      }



  }
 

  h1{
        margin-top: 12%;
        font-family: 'CenturyGothicBold';
        color:#ffffff;
        width: 50%;
        margin-left: 2%;
        font-size: 29px;

        @media only  screen and (max-width:798px) {  
          width: 60%;
          margin-left: 6%;
        
      } 
      @media only  screen and (max-width:730px) {  
        font-size: 24px;
        font-weight: 700;

      } 

      @media only  screen and (max-width:578px) {  
        margin-top:25%;

      }

      @media only  screen and (max-width:500px) {  
          margin-top: 30%;
          font-size: 20px;
      }

      @media only  screen and (max-width:400px) {  
          margin-top: 35%;
          font-weight: 600;
      }

      @media only  screen and (max-width:350px) {  
        margin-top: 45%;
        width: 70%;
      }
    
      @media only  screen and (max-width:290px) {  
        margin-top: 45%;
        width: 80%;
      }
    

   }

  .containerWhatsapp{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    position: fixed;
    z-index: 5;
    height: 30px;
    background: transparent;
    bottom: 15px;
    a{
      margin-right: 1.5%;
    }

  }


`

export const ContainerBigLogo = styled.div` 

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;

  @media only  screen and (max-width:798px) {  
    display: none;
  } 

`

export const BigLogo = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatAnimation 1s infinite alternate ease-in-out;
  margin-top: 100px;
  width:500px;
  height:388px;
  @keyframes floatAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-15px);
  }
}

@media only  screen and (max-width:1010px) {  
  width:400px;
  height:338px;
  } 
  @media only  screen and (max-width:880px) {  
  width:300px;
  height:278px;
  } 
  @media only  screen and (max-width:798px) {  
    display: none;
  } 

  




  

`


export const ImageWhatsapp = styled(Image)`
  width: 40px;
  height: 40px;
`