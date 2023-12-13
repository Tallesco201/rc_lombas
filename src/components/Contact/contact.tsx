import { contact } from "@/pages/api/api.Image";
import Image from "next/image";
import Link from "next/link";
import{FooterContact} from'./contactFooter.style'

export default function ContactFooter(){
    return (
        <> 
            <FooterContact>
                <h2>Informações de Contato</h2>

                <nav >
                    {contact.map((value)=> (
                        
                            <Link key={value.id}  href={value.url}>
                                <Image src= {value.iconContact} alt='icone contato'  width={55} height={55}/>
                            </Link>
                        
                        
                        
                    ))}

                </nav>
                <section>
                    <div className="containerLogoFooter">
                        <Image src= '/image/logoComLetrasPretas.png' alt='Logo rodape' width={160} height={120} />
                    </div>
                    <h3>CNPJ: 51.876.637/0001-87</h3>
                    <Image src= '/image/fotoRaphaFooter.png' alt='Foto Secretaria' width={214} height={285}/>


                </section>

            </FooterContact>
        
        </>
    )
}