import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { CartaScreen } from "../pages/CartaScreen";
import { RegisterScreen } from "../pages/RegisterScreen";
import { AdminScreen } from "../pages/AdminScreen";
import { ContactoScreen } from "../pages/ContatoScreen";



export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/login" element={<LoginScreen />}/>
                <Route path="/register" element={<RegisterScreen />}/>
                <Route path="/admin" element={<AdminScreen />}/>
                <Route path="/contacto" element={<ContactoScreen />}/>
                <Route path="/carta" element={<CartaScreen />}/>
            </Routes>
        </BrowserRouter>
    </>
    )
}
