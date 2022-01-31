import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className='d-flex flex-wrap align-items-center justify-content-center'>
      <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
        <button
          className='btn btn-outline-dark'
          onClick={ () => navigate("/customer/perfil")}
        >
          PERFIL
        </button>
        <button
          className='btn btn-outline-dark'
          onClick={ () => navigate("/customer/products")}
        >
          PRODUTOS
        </button>
      </ul>
    </header>
  );
}

export default Header;
