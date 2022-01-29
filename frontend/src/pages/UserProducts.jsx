import React from "react";
import ListProducts from "../components/ListProducts";
import NewProductForm from "../components/NewProductForm";
import "../styles/userProducts.css";

function UserProducts() {
  return (
    <main className='productsContainer'>
      <NewProductForm />
      <ListProducts />
    </main>
  );
}

export default UserProducts;
