//Importamos React
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

//Requerimos consulta a base de datos
import Services from "../services/listProductService";

// Importamos ProductList
import FormAddProduct from '../components/formAddProduct/formAddProduct';

// Requerimos servicio de POST
import Service from "../services/addProductService";

export default function AddProductContainer() {
    
// const [productAdded, setProductAdded] = useState([])

// function addProductOnForm() {
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const price = document.getElementById('price').value;
//     const thumbnail = document.getElementById('thumbnail').value;
//     const timestamp = document.getElementById('timestamp').value;
//     const code = document.getElementById('code').value;
//     const stock = document.getElementById('stock').value;

//     const productToAdd = {
//         title: title,
//         description: description,
//         price: price,
//         thumbnail: thumbnail,
//         timestamp: timestamp,
//         code: code,
//         stock: stock,
//     }

//     Service.addProduct(productToAdd);

// }

// useEffect(()=>{

//   const btnSubmit = document.getElementById('btn-submit');
//   console.log(btnSubmit);

//   function preventDefault(e) {
//     e.preventDefault();
//     console.log('Se ejecutó prevent default')
//   }

//   btnSubmit.addEventListener('click', preventDefault);

// })

//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     console.log("Ingresó a /productListContainer => useEffect");
//     const products = Services.getAllProducts();
//     products
//       .then((data) => {
//         setProductList(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

// function preventDefalt() {
 


  return (
    <FormAddProduct />
  )
}
