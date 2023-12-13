
import Image from 'next/image'
import {Background, BigLogo, ContainerBigLogo} from './homePage.style'

export default function HomePage(){
    return (
        <>
            <Background className="background">
            
                <div className='containerGeral'>

                    <h1>Assessoria assertiva para a sua empresa.</h1>
                    <ContainerBigLogo>
                    <BigLogo className='logoHeader' src="/image/logoGrande.svg" alt="Logo RC Lombas" width={500} height={388} />
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

                

            </Background>
        
        </>
    )
}