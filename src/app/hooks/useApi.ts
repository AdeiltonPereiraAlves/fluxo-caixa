import { useState } from "react"
import axios from "axios"
import { ProdutosProvider } from "../context/useContext"
export default function useApi(){
  
    const{dados,setDados, setResDelete} = ProdutosProvider()
//     async function post(nome: any, descricao: any, preco: any, quantidade: any){
//          try {
//      const dadosReturn = await axios.post('http://localhost:3009', {nome, descricao, preco, quantidade})
//      console.log(dadosReturn)
    
//    } catch (error) {
//     console.log(error, "erro")
//      throw new Error("erro ao cadastrar")
//    }   
  //  }
    async function getDados() {
            const dadosApi:any = await axios.get('http://localhost:3009/api/produtos')
            const d = await dadosApi.data
            console.log(d, "dadosapi")
            setDados(d)
      }
      async function deleteProduto(id: any) {
          const res =  await axios.delete(`http://localhost:3009/api/delete/${id}`)
          if(res){
            setResDelete(true)
            
          }

      }
    return{
       getDados,
       dados, setDados,
       deleteProduto
    }
}