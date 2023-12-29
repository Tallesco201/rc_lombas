import Image from "next/image";
import styled from "styled-components";

export const FooterContact =  styled.footer`
    height: 100%;
    width: 100vw;
    background-image: url('/image/fundoBrancoFooter.svg');
    background-repeat: no-repeat;
    background-size: cover;

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

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{

        margin-top: 5%;

        font-family: 'CenturyGothicBold';
        color:#FF0068;
        font-size: 36px;

        border-bottom: 4px solid #000000;
        border-radius:4px;

        @media only screen and (max-width:600px){
            font-size: 26px;
        }
        @media only screen and (max-width:350px){
            font-size: 22px;
        }
        
    }

    nav{
        width: 100%;
        
        margin-top: 6%;
        gap: 10%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .containerImageFooter{
        display: flex;
        width: 100%;
        justify-content: space-between;

        .containerLogoFooter{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        h4{
            margin-left: 5%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-bottom: 2%;
            font-size: 22px;

            font-family: 'CenturyGothic';

            @media only screen and (max-width:600px){
                font-size: 18px;
            }
            @media only screen and (max-width:520px){
                font-size: 14px;
            }
        }

        @media only screen and (max-width:600px){
            flex-direction: column;
            align-items: center;
        }

       
    }
  

`

export const ImageFooterCeo = styled(Image)`
    width: 219px;
    height: 300px;
    @media only screen and (max-width:600px){
        display: none;
    }
    
    `
export const ImageLogo = styled(Image)`
    width: 160px;
    height: 120px;
    
    @media only screen and (max-width:600px){
        margin-bottom: 20%;
        margin-top: 20%;
    }
       

`

export const ImageContacts = styled(Image)`
    width: 55px;
    height: 55px;

    @media only screen and (max-width:600px){
        width: 40px;
        height: 40px;
    }
    @media only screen and (max-width:380px){
        width: 35px;
        height: 35px;
    }
`