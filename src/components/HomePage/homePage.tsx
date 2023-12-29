
import Image from 'next/image'
import {Background, BigLogo, ContainerBigLogo, ImageWhatsapp} from './homePage.style'
import { Element } from 'react-scroll'
import Link from 'next/link'


export default function HomePage(){
    return (
        <Element name="home">
            <Background className="background">
            
                <div className='containerGeral'>

                    <h1>Assessoria assertiva para a sua empresa.</h1>
                    <ContainerBigLogo>
                    <BigLogo className='logoHeader' src="/image/logoGrande.svg" alt="Logo RC Lombas" width={0} height={0} />
                    </ContainerBigLogo>



                </div>

                    <div className='containerParagrafo'>
                        <p>  
                            A RC Lombas ajuda pequenos empresários individuais, entidades sem fins lucrativos,
                            profissionais autônomos e profissionais liberais a gerenciar seus negócios de forma profissional. 
                            Com mais de 5 anos de experiência, a empresa é gerenciada por Raphaelly Lombas,  
                            secretária formada que atua há mais de 7 anos na área de assessoria direta a executivos, 
                            o que gerou muita experiência e conhecimento para poder assessorar 
                            empresários de vários ramos   com cada vez mais qualidade e profissionalismo
                        </p>
                    </div>

                    <div className='containerWhatsapp'>
                        <a className= "linkWhatsapp" href="https://wa.me/5511968337434" target="_blank">
                            <ImageWhatsapp src="/image/whatsapp.svg" alt="" width={0} height={0}/>
                        </a>

                    </div>
                

            </Background>
        
        </Element>
    )
}