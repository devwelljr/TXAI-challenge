import React, { useState } from "react";
import axios from "axios";
import { node } from "prop-types";
import Context from "./Context";

/* Endpoints das requisições pro backend */
const endpoints = {
  user: {
    register: "http://localhost:3001/users/register",
    login: "http://localhost:3001/users/login",
    update: "http://localhost:3001/users/update",
    delete: "http://localhost:3001/users/delete",
  },
  products: {
    create: "http://localhost:3001/products/createProduct",
    myList: "http://localhost:3001/products/myProducts",
    update: "http://localhost:3001/products/myProduct",
    delete: "http://localhost:3001/products/myProduct",
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

    updateSubmit: (updateForm) =>
      axios.put(`${endpoints.user.update}/${user.id}`, updateForm, {
        headers: { Authorization: user.token },
      }),

    deleteSubmit: () =>
      axios.delete(`${endpoints.user.delete}/${user.id}`, {
        headers: { Authorization: user.token },
      }),
  };

  /* Objeto com todas as requisições de produtos */
  const productsReqs = {
    createSubmit: (newProduct) =>
      axios.post(endpoints.products.create, {
        ...newProduct,
        email: user.email,
      }),

    getMyProducts: () =>
      axios.get(endpoints.products.myList, {
        headers: { Authorization: user.token },
      }),

    updateMyProduct: async (newProduct) => {
      await axios.put(
        `${endpoints.products.delete}/${newProduct.id}`,
        { ...newProduct },
        {
          headers: { Authorization: user.token },
        }
      );
      const { data } = await productsReqs.getMyProducts();

      setProducts(data.products);
    },

    deleteMyProduct: async (id) => {
      await axios.delete(`${endpoints.products.delete}/${id}`, {
        headers: { Authorization: user.token },
      });
      const { data } = await productsReqs.getMyProducts();

      setProducts(data.products);
    },
  };

  return (
    <Context.Provider
      value={{
        endpoints,
        user,
        setUser,
        userReqs,
        productsReqs,
        products,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
