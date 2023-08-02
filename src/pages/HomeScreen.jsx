import { Banner } from '../componentes/Banner';
import { Categorias } from '../componentes/Categorias';
import { Footer } from '../componentes/Footer';
import { Header } from '../componentes/Header';

export const HomeScreen = () => {
  return (
    <>
        <Header />
        <Banner /> 
        <Categorias/> 
        <Footer />
    </>
  )
}
