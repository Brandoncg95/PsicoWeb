import registrateLogo from './assets/Registrate.png'
import inicioLogo from './assets/Inicio_Sesion.png'

function home () {
  return (
    <>
      <h1>Bienvenido a Psicoweb</h1>
      <div className="icon-container">
        <div className="logo-container">
          <p>¿Ya tienes cuenta?</p>
          <a href="https://vitejs.dev" target="blank">
            <img src={inicioLogo} className="logo" alt="Vite logo" />
          </a>
          <button className="logo-button" onClick={() => window.location.href='https://vitejs.dev'}>Iniciar Sesión</button>
        </div>
        <div className="logo-container">
          <p>¡Crea una cuenta!</p>
          <a href="https://react.dev" target="blank">
            <img src={registrateLogo} className="logo Registro" alt="Registro logo" />
          </a>
          <button className="logo-button" onClick={() => window.location.href='https://react.dev'}>Registrarse</button>
        </div>
      </div>
      <div className="icon-item">
        <p className="special-text">
          Aplicativo Web para Facilitar el Acceso a Servicios de Psicología en Comunidades Educativas en Cali
        </p>
      </div>
      <p className="special-text1">
        Haz clic en Iniciar Sesión si ya tienes cuenta, o en Regístrate para crear una nueva.
      </p>
    </>
  )
}

export default home