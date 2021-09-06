//Importamos React
import React, { useState, useEffect } from "react";

import SearchForm from "../components/searchForm/searchForm";

// Importamos petición fetch
import ProductByTitle from "../services/productByName";
import ProductByCode from '../services/productByCode'
import ProductByPrice from '../services/productsByPrice';
import ProductsByStock from "../services/productsByStock";

export default function SearchContainer() {
  const [productsFinded, setProductsFinded] = useState([]);

  function searchByTitle() {
    const title = document.getElementById("title").value;
    console.log(title);
    const product = ProductByTitle.getProductByTitle(title);
    product
      .then((data) => setProductsFinded(data))
      .catch((err) => console.log(err));
    console.log(productsFinded);
  }

  function searchByCode() {
    const code = document.getElementById("code").value;
    console.log(code);
    const product = ProductByCode.getProductByCode(code)
    product
      .then((data) => setProductsFinded(data))
      .catch((err) => console.log(err));
    console.log(productsFinded);
  }

  function searchByPrice() {
    const minPrice = document.getElementById("price-min").value;
    const maxPrice = document.getElementById("price-max").value;


    const product = ProductByPrice.getProductByPrice(minPrice,maxPrice);
    product
      .then((data) => {
          console.log(data);
          setProductsFinded(data);
        })
      .catch((err) => console.log(err));

  }

  function searchByStock() {
    const minStock = document.getElementById("stock-min").value;
    const maxStock = document.getElementById("stock-max").value;


    const product = ProductsByStock.getProductByStock(minStock,maxStock);
    product
      .then((data) => {
          console.log(data);
          setProductsFinded(data);
        })
      .catch((err) => console.log(err));

  }

  return (
    <>
      <SearchForm searchByTitle={searchByTitle} searchByCode={searchByCode} searchByPrice={searchByPrice} searchByStock={searchByStock}/>
      {productsFinded.length === 0 ? (
        <div>
         <br/>
         <h2>No hay productos</h2>
        </div>
      ) : (
        <div>
            <br/>
            <h3>Productos Encontrados</h3>
            {
                productsFinded.map((singleItem) => {
                    return <p>{singleItem.title} / ${singleItem.price} / Stock: {singleItem.stock}</p>
                })
            }

        </div>
      )}
    </>
  );
}
