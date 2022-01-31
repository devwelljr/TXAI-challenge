import React, { useState, useContext } from "react";
import Context from "../context/Context";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import '../styles/perfil.css';

function Login() {
  const { user, setUser, userReqs } = useContext(Context);
  const [newUser, setNewUser] = useState({
    email: user.email,
    user: user.user,
  });
  const navigate = useNavigate();

  /* Salva mudanças do input no estado local */
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewUser({ ...newUser, [name]: value });
  };

  /* Função responsável pela atualização do usuario */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await userReqs.updateSubmit(newUser);

      setUser(newUser);
    } catch (error) {
      console.log(error);
    }
  };

  /* Função responsável por deletar o usuario */
  const handleSubmitDelete = async (event) => {
    event.preventDefault();

    try {
      await userReqs.deleteSubmit();

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <h1 className='display-4 font-weight-normal'>Perfil</h1>

      <hr />

      <main className='perfilContainer'>
        <div>
          <h1 className='display-5 font-weight-normal'>{`Usuário: ${user.user}`}</h1>
          <h2 className='display-6 font-weight-normal'>{`Email: ${user.email}`}</h2>
        </div>

        <br />

        <div className="">
          <h2>Edição de Perfil</h2>
          <input
            type='text'
            name='user'
            className='form-control'
            placeholder='Digite aqui seu novo user'
            onChange={handleChange}
          />
          <input
            type='text'
            name='email'
            className='form-control'
            placeholder='Digite aqui seu novo email'
            onChange={handleChange}
          />
          <div className='row justify-content-center'>
            <button
              type='submit'
              className='btn btn-outline-dark'
              onClick={handleSubmit}
            >
              Novo Perfil
            </button>
            <button
              type='submit'
              className='btn btn-outline-dark'
              onClick={handleSubmitDelete}
            >
              Deletar Perfil
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
