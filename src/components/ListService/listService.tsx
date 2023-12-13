import { servicesProvided } from "@/pages/api/api.Image";
import{ContainerService, Partnership} from './listService.style'
import Image from "next/image";

export default function ListService(){
    return (
        
            <ContainerService>
                {servicesProvided.map((value)=> (
                    
                   <li key= {value.id}  >
                        <div>
                            <Image src={value.icon} alt="icone serviço" width={50} height={50}/>
                            <div className="containerParagraf">
                                <p>{value.service}</p>
                            </div>
                        </div>
                   </li>

                ))}
                
            <Partnership>Possuímos parceria com Advogados, Bombeiros e Contadores o que permite aos nossos clientes 
            um auxílio maior em outras demandas e com preços acessíveis.</Partnership>
            </ContainerService>

            
            
        
    )
}

                    

                    
                    


