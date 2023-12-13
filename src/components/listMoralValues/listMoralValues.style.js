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
        width: 300px;
        height: 230px;
        letter-spacing: 0;
        line-height: 20px;

        font-family:'CenturyGothic';
        font-size: 12px;
        text-align: center;

        box-shadow: 3px 4px 4px 6px #00000026;

        .titleValues{
            font-family:'CenturyGothicBold' ;
            font-size: 14px;
            margin-bottom: 8%;
        }
        .containerImageValue{
            margin-top:6% ;
        }

        
    }
`