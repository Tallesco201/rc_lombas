import { moralValues } from '@/pages/api/api.Image'
import Image from 'next/image'
import React from 'react'
import {ImageValue, ListNotOrden} from'./listMoralValues.style'

export default function ListMoralValues()  {
  return (
    <>
        <ListNotOrden>
            {moralValues.map((value) =>(
             
                <li key={value.id}>
                    <div className='containerImageValue'>
                        <ImageValue src={value.image} alt={value.descritionImage} width={0} height={0}/>
                    </div>
                    <p className='titleValue'>
                        {value.title}
                    </p>
                    <p className='textValue'>
                        {value.text}
                    </p>
                </li>
             
             

            )

        )}
        </ListNotOrden>
    
    </>
    )
}

