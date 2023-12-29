import { servicesProvided } from "@/pages/api/api.Image";
import{ContainerService, ImageService, Partnership} from './listService.style'
import Image from "next/image";
import { Element } from "react-scroll";

export default function ListService(){
    return (
        <Element name= 'acting'>
        
        
            <ContainerService>
                {servicesProvided.map((value)=> (
                    
                <li key= {value.id}  >
                        <div>
                            <ImageService src={value.icon} alt="icone serviço" width={0} height={0}/>
                            <div className="containerParagraf">
                                <p>{value.service}</p>
                            </div>
                        </div>
                </li>

                ))}
                
            <Partnership>Possuímos parceria com Advogados, Bombeiros e Contadores o que permite aos nossos clientes 
            um auxílio maior em outras demandas e com preços acessíveis.</Partnership>
            </ContainerService>
        
        
        
        
        </Element >
        

            
            
        
    )
}

                    

                    
                    


