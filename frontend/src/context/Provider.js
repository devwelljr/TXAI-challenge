import React, { useState } from "react";
import axios from "axios";
import { node } from "prop-types";
import Context from "./Context";

/* Endpoints das requisições pro backend */
const endpoints = {
  user: {
    register: "http://localhost:3001/users/register",
    login: "http://localhost:3001/users/login",
    list: "http://localhost:3001/users/list",
    delete: "http://localhost:3001/users/delete",
  },
  products: {
    create: "http://localhost:3001/products/createProduct",
    myList: "http://localhost:3001/products/myProducts",
  },
};

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  /* Objeto com todas as requisições de usuário */
  const userReqs = {
    loginSubmit: (loginForm) => axios.post(endpoints.user.login, loginForm),

    registerSubmit: (registerForm) =>
      axios.post(endpoints.user.register, registerForm),
  };

  /* Objeto com todas as requisições de produtos */
  const productsReqs = {
    createSubmit: (newProduct) =>
      axios.post(endpoints.products.create, { ...newProduct, email: user.email }),

    getMyProducts: () =>
      axios.get(endpoints.products.myList, {
        headers: { Authorization: user.token },
      }),
  };

  return (
    <Context.Provider
      value={{ endpoints, user, setUser, userReqs, productsReqs, products, setProducts }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
