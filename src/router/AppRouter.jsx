import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";
import { AdminScreen } from "../pages/AdminScreen";

export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/login" element={<LoginScreen />}/>
                <Route path="/register" element={<RegisterScreen />}/>
                <Route path="/admin" element={<AdminScreen />}/>
            </Routes>
        </BrowserRouter>
    </>
    )
}