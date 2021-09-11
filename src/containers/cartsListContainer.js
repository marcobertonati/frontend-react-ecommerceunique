//Importamos React
import React, { useState, useEffect } from "react";

//Requerimos servicios
import Carts from '../services/cartListService'

//Importamos componente Cart List
import CartList from "../components/cartList/cartList";

export default function CartsListContainer () {

    const [cartList, setCartList] = useState([]);

    useEffect(()=> {
        console.log('Ingresó a /cartListContainer');
        const carts = Carts.cartListService();
        carts
            .then((data)=>{
                console.log(data);
                setCartList(data);
            })
            .catch((err)=>console.log(err))
    },[])



    return(

        <CartList cartList={cartList} />
    )
}