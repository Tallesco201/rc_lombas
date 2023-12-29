import Image from 'next/image'
import {Link} from 'react-scroll'
import React from 'react'
import {Header} from './header.style'

export default function HeaderStyle()  {
  return (
    <>
    <Header>
        <Image className='logoHeader' src="/image/logoComLetrasBrancas.svg" alt="Logo RC Lombas cabeçalho" width={100} height={100} />
        <div>
            <nav>
                <Link to="home" spy={true} smooth={true}>Home</Link>
                <Link to="about-me" spy={true} smooth={true}>Sobre mim</Link>
                <Link to="acting" spy={true} smooth={true}>Atuação</Link>
                <Link to="contact" spy={true} smooth={true}>Contato</Link>
            </nav>
        </div>
    </Header>
    </>
  )
}
    



