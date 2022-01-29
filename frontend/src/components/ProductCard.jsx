import React from "react";
import PropTypes from "prop-types";

/* Gera card do produto */
function ProductCard({ product }) {
  const { name, price, quantity } = product;

  return (
    <div className='card'>
      <div className='card-body'>
        <h1 className='card-title text-center'>{name}</h1>
        <h2 className='card-text'>{`Preço: R$${price}`}</h2>
        <h2 className='card-text'>{`Quantidade: ${quantity}`}</h2>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default ProductCard;
