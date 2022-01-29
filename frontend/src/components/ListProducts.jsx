import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import ProductCard from "../components/ProductCard";

function ListProducts() {
  const { productsReqs, products, setProducts } = useContext(Context);
  const [loading, setLoading] = useState(true);

  /* Quando iniciado a aplicação já busca os produtos */
  useEffect(() => {
    const productsExec = async () => {
      const products = await productsReqs.getMyProducts();

      setProducts(products.data.products);
    };
    productsExec();
  }, []);

  /* Elemento loading */
  useEffect(() => {
    setLoading(true);
    if (products.length) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div className='list'>
      <h2 className='display-6 font-weight-normal'>Produtos</h2>

      <div className='d-flex flex-wrap'>
        {loading ? (
          <span>Nenhum produto</span>
        ) : (
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ListProducts;
