import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

import logo from '../../assets/logo-small.png'
import truck from '../../assets/truck.png'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <Link to="/">
            <img src={logo} alt="Keapê" />
          </Link>
        </header>
        <div id="body-home" className="body-home">
          <main>
            <h1>Sempre conectado com os caminhoneiros</h1>
            <p>Em tempo real</p>
            <p>A qualquer hora</p>
            <p>Em qualquer lugar</p>

            <a href="http://keape-ccr.whatz.me">
              <span>
                <FiLogIn />
              </span>
              <strong>QRV prossiga!</strong>
            </a>
          </main>
          <div id="image-truck">
            <img src={truck} alt="truck" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;