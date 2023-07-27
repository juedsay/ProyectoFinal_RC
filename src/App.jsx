import './App.css'
import { BannerScreen } from './componentes/BannerScreen'
import { Categorias } from './componentes/Categorias'

function App() {

  return (
    <>
    <div className="container">

      {/* NAVBAR */}
      
      {/* PANTALLA DE BIENVENIDA */}
      <BannerScreen />
      <Categorias />    
    </div>
    </>
  )
}

export default App
