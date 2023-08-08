import { useNavigate } from "react-router";
let navigate = useNavigate();

const checkearUsuario = () => {
    if(JSON.parse(localStorage.getItem('user')) == null){
        navigate('/');
    }    
}

module.exports = checkearUsuario;