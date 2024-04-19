// Header.js
import './header.css'
import Logo from '../../img/logo.jpg'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img  className ='logo' src={Logo} alt="Logo da empresa" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/tarefas">Tarefas</a></li>
        </ul>
      </nav>
      <div className="login">
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;