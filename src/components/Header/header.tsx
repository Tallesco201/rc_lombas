import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Header} from './header.style'

export default function HeaderStyle()  {
  return (
    <>
    <Header>
        <Image className='logoHeader' src="/image/logoComLetrasBrancas.png" alt="Logo RC Lombas" width={100} height={100} />
        <div>
            <nav>
                <Link href="">Home</Link>
                <Link href="">Sobre mim</Link>
                <Link href="">Atuacao</Link>
                <Link href="">Contato</Link>
            </nav>
        </div>
    </Header>
    </>
  )
}
    



