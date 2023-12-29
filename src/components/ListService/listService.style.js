import Image from "next/image";
import styled from "styled-components";

export const ContainerService = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    list-style: none;
    
    gap: 2.5%;
    padding: 20px;


    
    @font-face {
    font-family: 'CenturyGothicBold';
    src: url('/fonts/GOTHICB.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    }

    @media only screen and (max-width:600px){
        flex-direction: column;
    }


    li{
        display: flex;
        align-items: center;
        text-align: center;

        height: 85px;
        width: 43%;
        gap: 2.5%;

        margin-bottom: 30px;

        box-shadow: 3px 2px 2px 5px #00000026;

        @media only screen and (max-width:600px){
            width: 70%;
        }
        @media only screen and (max-width:380px){
            width: 85%;
        }
        div{
            display: flex;
            justify-content: flex-start;
            width: 100%;
            padding-left: 10%;
        }

        .containerParagraf{
            display: flex;
            justify-content: center;
            padding-left: 0%;
            align-items: center;

            p{
                font-family: 'CenturyGothicBold';
                @media only screen and (max-width:769px){
                    font-size: 14px;
                }
                @media only screen and (max-width:700px){
                    font-size: 12px;
                }
                @media only screen and (max-width:600px){
                   font-size: 14px;
                }
                @media only screen and (max-width:550px){
                   font-size: 12px;
                }

                
            }
        }

    }


`


export const Partnership = styled.p`
        
    @font-face {
    font-family: 'CenturyGothicBold';
    src: url('/fonts/GOTHICB.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;

}
font-family:'CenturyGothicBold' ;
font-size: 12px;
width: 60%;
margin-top: 5%;

text-align: center;

@media only screen and (max-width:500px){
    width: 80%;
}
@media only screen and (max-width:350px){
    width: 95%;
}

    
`

export const ImageService= styled(Image)`
    width:50px ;
    height: 50px;
    @media only screen and (max-width:700px){
        width: 40px;
        height: 40px;
    }
    @media only screen and (max-width:600px){
        width: 45px;
        height: 45px;
    }
    @media only screen and (max-width:550px){
        width: 40px;
        height: 40px;
    }

`