import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";
import { AdminScreen } from "../pages/AdminScreen";
import { ProductScreen } from "../pages/ProductScreen";
import { PedidoScreen } from "../pages/PedidoScreen";
import { MisPedidosScreen } from "../pages/MisPedidosScreen";

export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/login" element={<LoginScreen />}/>
                <Route path="/register" element={<RegisterScreen />}/>
                <Route path="/admin" element={<AdminScreen />}/>
                <Route path="/product/:id" element={<ProductScreen />}/>
                <Route path="/pedido" element={<PedidoScreen />}/>
                <Route path="/mispedidos" element={<MisPedidosScreen />}/>
            </Routes>
        </BrowserRouter>
    </>
    )
}
