import '../css/login.css';
export const LoginScreen = () => {
  return (
    <>
        <div className="login-container">
            <form>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Contraseña" />
            </form>
        </div>
    </>
  )
}
