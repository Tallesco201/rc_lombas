import styled from "styled-components";

export const ContainerVideo = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.cotainerTitulo{
    width: 100%;
    padding-left:2%;
    margin-bottom: 5%;

    @font-face {
    font-family: 'CenturyGothicBold';
    src: url('/fonts/GOTHICB.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;

}
    div{
        border-left: 7px solid #FF0068;
        height: 50px;
        display: flex;
        align-items: center;
        h2{
            font-family: 'CenturyGothicBold';
            font-size: 30px;
            padding-left:1.8%;
        }
    }
}




`


export const StyledIframe = styled.iframe`
  width: 720px;
  height: 500px;
  margin-bottom: 7%;
  
  `