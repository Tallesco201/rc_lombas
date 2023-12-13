import Image from "next/image";
import styled from "styled-components";


export const Background= styled.div`

  background-image: url('/image/fundoEscritorio.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 110vh;
 
  width: 100%;
  
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
  }
  .containerParagrafo{
    width: 40%;
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



    }
  }
 

  h1{
        margin-top: 12%;
        font-family: 'CenturyGothicBold';
        color:#ffffff;
        width: 50%;
        margin-left: 2%;
        font-size: 29px;
   }
`

export const ContainerBigLogo = styled.div` 

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;

`

export const BigLogo = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatAnimation 1s infinite alternate ease-in-out;
  margin-top: 100px;
  @keyframes floatAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-15px);
  }
}
  

`