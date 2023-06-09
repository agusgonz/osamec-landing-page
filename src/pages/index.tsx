import fontstyles from '../styles/fonts.module.css'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Contacto from '@/components/Contacto'
import Nosotros from '@/components/Nosotros'
import Divider from '@/components/Divider'
import Galeria from '@/components/Galeria'
import Mapa from '@/components/Mapa'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className={` overflow-x-hidden ${fontstyles.regularFont}` }>
      <Navbar />
      <Hero />
        <Divider toId='contacto'/>
      <Contacto />
        <Divider right toId='mapa'/>
      <Mapa />
        <Divider />
      <Contacto />
        <Divider right toId='nosotros'/>
      <Nosotros />
        <Divider />
      <Contacto />
      <Footer />
      {/* <Reviews /> */}
    </div>
  )
}
