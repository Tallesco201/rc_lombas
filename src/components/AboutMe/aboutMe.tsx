import { Element } from 'react-scroll'
import {ContentAboutMe, ImageAboutme} from './aboutMe.style'

export default function AboutMe(){
    return(
        <Element name= "about-me">
            <ContentAboutMe>
                <ImageAboutme src="/image/fotoRaphaSobreMim.svg" alt="Foto Raphaelly CEO Rc Lombas" width={0} height={0}/>
                <div className='containerAboutMe'>
                    <h3>
                        Sobre Mim 
                    </h3>

                    <p className='nameCeo'>Raphaelly Lombas</p>
                    <p className="description">
                        Esposa, mãe e empreendedora.<br></br>
                        Desde meus 17 anos trabalhei em escritórios como assistente 
                        administrativo, fui ganhando experiencia e me apaixonando pelo
                        ato de assessorar,   e organizar a vida profissional  das pessoas.            
                    </p>
                </div>
            </ContentAboutMe>
        
        </Element>
    )
}