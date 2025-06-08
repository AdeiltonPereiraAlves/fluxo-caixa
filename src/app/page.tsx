"use client";
import "../app/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Tabela from "./components/Tabela";
import useApi from "./hooks/useApi";
import { ProdutoProvider, ProdutosProvider } from "./context/useContext";
export default function Home() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState();
  const [quantidade, setQuantidade] = useState();
  const [dados, setDados] = useState([]);

  const{getDados} = ProdutosProvider()






  async function handleSubmit() {
    console.log("cliq");
    try {
      const dadosReturn: any = await axios.post(
        "http://localhost:3009/produto",
        { nome, descricao, preco, quantidade }
      );
      setDados(dadosReturn.data);
      console.log(dadosReturn.data, "dados");
      await getDados()
      
    } catch (error) {
      console.log(error, "erro");
      throw new Error("erro ao cadastrar");
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="bg-amber-600 h-5 w-2 text-amber-800">Front caixa</h1>
      <input
        type="text"
        name="nome"
        value={nome}
        placeholder="Digite o nome do produto"
        onChange={(e: any) => setNome(e.target.value)}
      />
      <input
        type="text"
        name="descricao"
        value={descricao}
        placeholder="Digite a descrição do produto"
        onChange={(e: any) => setDescricao(e.target.value)}
      />
      <input
        type="text"
        name="preco"
        value={preco}
        placeholder="Digite o preço do produto"
        onChange={(e: any) => setPreco(e.target.value)}
      />
      <input
        type="text"
        name="quantidade"
        value={quantidade}
        placeholder="Digitea quantidade do produto"
        onChange={(e: any) => setQuantidade(e.target.value)}
      />
      <button onClick={handleSubmit}>Cadastrar</button>
      {/* <div>
        {dados && dados.map((e:any) => (
            <div key={e.id}>
               <li>{e.nome}</li>
               <li>{e.descricao}</li>
               <li>{e.preco}</li>
               <li>{e.quantidade}</li>
            </div>  
      ))}

      
      </div> */}
      <Tabela/>
    </div>
  );
}
