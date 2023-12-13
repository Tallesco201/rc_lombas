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
    li{
        display: flex;
        align-items: center;
        text-align: center;

        height: 85px;
        width: 43%;
        gap: 2.5%;

        margin-bottom: 30px;

        box-shadow: 3px 2px 2px 5px #00000026;
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

    
`