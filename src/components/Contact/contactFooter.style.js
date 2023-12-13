import styled from "styled-components";

export const FooterContact =  styled.footer`
    height: 100vh;
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

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{

        margin-top: 5%;

        font-family: 'CenturyGothicBold';
        color:#FF0068;
        font-size: 40px;

        border-bottom: 4px solid #000000;
        border-radius:4px;
        
    }

    nav{
        width: 100%;
        
        margin-top: 6%;
        gap: 10%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    section{
        display: flex;
        width: 100%;
        justify-content: space-between;

        .containerLogoFooter{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        h3{
            margin-left: 5%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-bottom: 2%;
            font-size: 22px;
        }
    }
  

`