import { contact } from "@/pages/api/api.Image";
import Image from "next/image";
import Link from "next/link";
import{FooterContact, ImageContacts, ImageFooterCeo, ImageLogo} from'./contactFooter.style'
import { Element } from "react-scroll";

export default function ContactFooter(){
    return (
        <Element name ="contact"> 
            <FooterContact>
                <h2>Informações de Contato</h2>

                <nav >
                    {contact.map((value)=> (
                        
                            <a key={value.id}  href={value.url} target="_blank">
                                <ImageContacts src= {value.iconContact} alt='icone contato'  width={0} height={0}/>
                            </a>
                        
                        
                        
                    ))}

                </nav>
                <section className="containerImageFooter">
                    <div className="containerLogoFooter">
                        <ImageLogo src= '/image/logoComLetrasPretas.svg' alt='Logo rodape' width={0} height={0} />
                    </div>
                    <h4>CNPJ: 51.876.637/0001-87</h4>
                    <ImageFooterCeo src= '/image/fotoRaphaFooter.svg' alt='Foto Secretaria' width={0} height={0}/>


                </section>

            </FooterContact>
        
        </Element>
    )
}