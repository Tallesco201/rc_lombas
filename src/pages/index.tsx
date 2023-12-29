
import AboutMe from '@/components/AboutMe/aboutMe'
import ContactFooter from '@/components/Contact/contact'
import Header from '@/components/Header/header'
import HomePage from '@/components/HomePage/homePage'
import ListService from '@/components/ListService/listService'
import ListMoralValues from '@/components/listMoralValues/listMoralValues'

import {Container} from '@/styles/index.style'

export default function Home() {
  return (
    <>
     
     <Header/>
     <main>
        <HomePage/>
        <Container>
          <ListMoralValues/>
         
         <AboutMe/>
        <ListService/> 
        </Container>
     </main>
      <ContactFooter/> 
  
    </>
  )
}
