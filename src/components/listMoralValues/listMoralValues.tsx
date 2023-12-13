import { moralValues } from '@/pages/api/api.Image'
import Image from 'next/image'
import React from 'react'
import {ListNotOrden} from'./listMoralValues.style'

export default function ListMoralValues()  {
  return (
    <>
        <ListNotOrden>
            {moralValues.map((value) =>(
             
                <li key={value.id}>
                    <div className='containerImageValue'>
                        <Image src={value.image} alt={value.descritionImage} width={50} height={50}/>
                    </div>
                    <p className='titleValues'>
                        {value.title}
                    </p>
                    <p>
                        {value.text}
                    </p>
                </li>
             
             

            )

        )}
        </ListNotOrden>
    
    </>
    )
}

