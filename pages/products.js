import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";

export default function ProductsPage({productos}) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid productos={productos} />
      </Center>
    </>
  );
}

export const  getServerSideProps = async (context)=> {
  const res = await fetch('https://musicpro.bemtorres.win/api/v1/bodega/producto');

  return {
    props:{
      productos
    }
  };
}