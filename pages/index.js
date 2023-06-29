/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Featured from '@/components/Featured';
import styled from "styled-components";
import styles from './index.module.css';

export default function Index({ data }) {
  return (
    <div>
      <Header />
      <Featured />

      <div className={styles.container}>
        <h2>Productos</h2> {/* Encabezado */}
        <div className={styles.productContainer}>
          {data &&
            data.productos &&
            data.productos.map((producto) => (
              <div key={producto.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img src={producto.asset} alt='' />
                </div>
                <div className={styles.productDetails}>
                  <h4>{producto.nombre}</h4>
                  <p>{producto.descripcion}</p>
                  <p className={styles.price}>Precio: {producto.precio}</p>
                  <button className={styles.buyButton}>Comprar</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://musicpro.bemtorres.win/api/v1/bodega/producto");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: null,
      },
    };
  }
}








/* Envios

return(
  </div>
      <button onClick={handleCrearEnvio}>Crear Envío</button>
    </div>
)

const handleCrearEnvio = async () => {
    const datosEnvio = {
      // Aquí coloca los datos necesarios para crear el envío
    };

    try {
      const respuesta = await crearEnvio(datosEnvio);
      console.log(respuesta); // Aquí puedes manejar la respuesta de la API
    } catch (error) {
      console.error(error);
    }
  };*/








