'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
// 1.1 Tipo do usuário
type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number
};

// 1.2 Tipo do contexto
type ProdutoContextType = {

  dados: any
  getDados: ( ) => any;
  setDados: any
 
};

// 1.3 Valor padrão do contexto
const AuthContext = createContext<ProdutoContextType | undefined>(undefined);
// 1.4 Provider
export const ProdutoProvider = ({ children }: { children: ReactNode }) => {
    const [dados, setDados] = useState<Produto | null>(null);
    
    async function getDados() {
        const dadosApi:any = await axios.get('http://localhost:3009/api/produtos')
        const d = await dadosApi.data
        console.log(d, "dadosapi")
        setDados(d)
    }
    useEffect(() => {
         try {
               getDados()
         } catch (error) {
             throw new Error("erro ao buscar dados")
         }
     },[])


  

  return (
    <AuthContext.Provider value={{getDados, dados, setDados  }}>
      {children}
    </AuthContext.Provider>
  );
};

// 1.5 Hook para usar o contexto
export const ProdutosProvider = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
