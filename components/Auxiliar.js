import React, { useEffect, useState } from 'react'

export default function Auxiliar() {

    const [items, setItems] = useState([])
    const peticion = async()=>{
        const res = await fetch("https://musicpro.bemtorres.win/api/v1/bodega/producto");
        const data = await res.json();
        setItems(productos)

    }

    useEffect(()=>{
        peticion(); 
    },[])
    
  return (
    <div>Auxiliar</div>
  )
}
