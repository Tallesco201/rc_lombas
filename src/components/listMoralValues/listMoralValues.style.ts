import Image from "next/image";
import styled from "styled-components";

export const ListNotOrden = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 2%;


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

    li{
        margin-top: 40px;
        margin-bottom: 40px;

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        max-width: 300px;
        height: 230px;
        letter-spacing: 0;
        line-height: 20px;

        font-family:'CenturyGothic';
        font-size: 12px;
        text-align: center;

        box-shadow: 3px 4px 4px 6px #00000026;

        @media only screen and (max-width:600px){
            width: 70%;
            max-width: 400px;
        }
        @media only screen and (max-width:350px){
           padding: 1%;
        }


        .titleValue{
            font-family:'CenturyGothicBold' ;
            font-size: 14px;
            margin-bottom: 8%;
            @media only screen and (max-width:740px){
                font-size: 12px;
            }

            @media only screen and (max-width:600px){
                font-size: 14px;
            }

            @media only screen and (max-width:350px){
                font-size: 12px;
            }

        }
        .containerImageValue{
            margin-top:6% ;
        }

        .textValue{

            @media only screen and (max-width:740px){
                font-size: 11px;
            }
            @media only screen and (max-width:600px){
                font-size: 11px;
            }

        }


        
    }


    @media only screen and (max-width:600px){
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }

`

 export const ImageValue = styled(Image)`
    width: 50px;
    height: 50px;
    @media only screen and (max-width:740px){
        width: 40px;
        height: 40px;
    }
    @media only screen and (max-width:600px){
        width: 55px;
        height: 55px;
    }
    @media only screen and (max-width:350px){
        width: 40px;
        height: 40px;
    }
 
 `