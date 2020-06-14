import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

import logo from '../../assets/logo-small.png'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <Link to="/">
            <img src={logo} alt="Ecoleta" />
          </Link>
        </header>

        <main>
          <h1>Seu marketplace de coleta de residuos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;