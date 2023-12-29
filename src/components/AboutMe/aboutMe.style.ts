import styled from "styled-components";
import Image from "next/image";

export const ImageAboutme = styled(Image)`
    width:264px;
    height: 400px;
    margin-left: 12%;
    
    
    `

export const ContentAboutMe = styled.section`
    width: 100%;
    display: flex;
    margin-top: 12%;
    margin-bottom: 9%;

    @font-face {
        font-family: 'CenturyGothicBold';
        src: url('/fonts/GOTHICB.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    .containerAboutMe{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        margin-left: 4%;


        h3{
            display: flex;
            align-items: center;

            margin-top: 8%;
            margin-bottom: 3%;
            
            padding-left: 4%;
            border-left: 7px solid #FF0068 ;
            
            height: 13%;
            font-size: 26px;
            font-family:'CenturyGothicBold' ;
            
            @media only screen and (max-width:400px){
                margin-bottom: 8%;
            }
        }

        .nameCeo{
            font-family:'CenturyGothicBold' ;
            font-size: 18px;
            color: #2D2C2C;
            
            padding-left: 1.4%;
            margin-bottom: 4%;
            
            @media only screen and (max-width:400px){
                margin-bottom: 6%;
            }

        }
        .description{
            font-family:'CenturyGothicBold' ;
            font-size: 13px;
            color:#303030;
            line-height: 35px;

            padding-left: 1.4%;

            width: 60%;

            @media only screen and (max-width:900px){
                width: 80%;
            }
            @media only screen and (max-width:700px){
                width: 98%;
            }
        }
        




    }

    @media only screen and (max-width:600px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

`