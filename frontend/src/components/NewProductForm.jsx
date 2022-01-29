import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../context/Context";
import '../styles/userProducts.css';

function NewProductForm() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  const [disable, setDisable] = useState(true);
  const { productsReqs, setProducts } = useContext(Context);

  /* A cada mudança nos inputs e feito a validação para liberação do butão */
  useEffect(() => {
    const { name, price, quantity } = newProduct;
    const valid = name.length >= 4 && price >= 0.1 && quantity > 0;

    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [newProduct]);

  /* Salva mudanças do input no estado local */
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  /* Função responsável pela criação do produto */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await productsReqs.createSubmit(newProduct);

      const allProducts = await productsReqs.getMyProducts();

      setProducts(allProducts.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='formProductsConteiner'>
      <h2 className="display-6 font-weight-normal">Cadastre seus produtos aqui:</h2>

      <br />

      <form className='' action='submit'>
        <label className='formLabel' htmlFor='name'>
          Nome
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Digite o nome do produto'
            value={newProduct.name}
            onChange={handleChange}
          />
        </label>

        <label className='formLabel' htmlFor='price'>
          Preço
          <input
            type='number'
            className='form-control'
            name='price'
            placeholder='Digite o preço do produto'
            value={newProduct.price}
            onChange={handleChange}
            min={0}
          />
        </label>

        <label className='formLabel' htmlFor='quantity'>
          Quantidade
          <input
            type='number'
            className='form-control'
            name='quantity'
            placeholder='Digite a quantidade de produtos'
            value={newProduct.quantity}
            onChange={handleChange}
            min={0}
          />
        </label>

        <br />

        <button
          type='submit'
          className='btn btn-outline-light'
          disabled={disable}
          onClick={handleSubmit}
        >
          Novo Produto
        </button>
      </form>
    </div>
  );
}

export default NewProductForm;
