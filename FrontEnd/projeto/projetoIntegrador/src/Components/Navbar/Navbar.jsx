import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../Data/no_image.png"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function cadastrar() {
    navigate("/cadastro");
  }

  function logar() {
    navigate("/login");
  }

  return (
      <nav className="sticky-top">
        <div className={styles.navBarContainer}>
            <div className={styles.navBarLogo}>
              <Link className="link" to="/">
                <img className={styles.navBarLogoImg} src={logo}/>
              </Link>
              <Link className="link" to="/">
                <h2>Tralala</h2>
              </Link>
            </div>
          <div className={styles.navBarBotoes}>
            <button onClick={cadastrar} className={styles.navBarBtn}>Criar conta</button>
            <button onClick={logar} className={styles.navBarBtn}>Iniciar sessão</button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
