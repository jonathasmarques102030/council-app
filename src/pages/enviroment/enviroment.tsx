import { prisma } from "@/lib/prisma";
import { Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";

interface Pessoa {
  id: number,
  name: string;
  email: string;
  password: string;
}

export default function Enviroment(pessoas: Pessoa) {
  return (
    <>
      <Typography>HOME OFFICE</Typography>
      <Typography>{JSON.stringify(pessoas, null, 2)}</Typography>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pessoas = await prisma.pessoa.findMany();

  const data = pessoas.map((pessoa) => {
    return {
      id: pessoa.id,
      name: pessoa.name,
      email: pessoa.email,
      password: pessoa.password,
    };
  });

  console.log(data);

  return {
    props: {
      pessoas: data,
    },
  };
};
