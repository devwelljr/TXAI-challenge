import React from "react";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";
import NewProductForm from "../components/NewProductForm";
import "../styles/userProducts.css";

function UserProducts() {
  return (
    <div>
      <Header />
      <main className='productsContainer'>
        <NewProductForm />
        <ListProducts />
      </main>
    </div>
  );
}

export default UserProducts;
