import React, {useState,useContext} from 'react'

import "./itemDetail.css"
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {

 
  return (


    <div className='itemDetailText'> 
    
        <h1>{producto.nombre}</h1>
        <img className='itemDetailImg' src={producto.img1} alt={producto.nombre} />
        <h2>{producto.titulo1}</h2>
        <h2>Precio : {producto.valor}</h2>
        <h2>Categoria : {producto.category}</h2>
        <h3>Descripcion {producto.referencia1}</h3>
        <h3>Servicios {producto.servicios}</h3>
        <h3>Dimenciones {producto.medidas}</h3>
       

    </div>

  );
};

export default ItemDetail;

