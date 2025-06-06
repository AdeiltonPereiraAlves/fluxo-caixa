// export default function Tabela(){
//     return (

//     )
// }
'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import axios from "axios"
import useApi from "../hooks/useApi"
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function Tabela() {
    const {dados,getDados, setDados} = useApi()
  
    useEffect(() => {
        try {
              getDados()
        } catch (error) {
            throw new Error("erro ao buscar dados")
        }
    },[])
  return (
    <Table>
      <TableCaption>Lista de Produtos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Produto</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead className="text-right">Quantidade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dados && dados!.map((invoice:any) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.nome}</TableCell>
            <TableCell>{invoice.descricao}</TableCell>
            <TableCell>{invoice.preco}</TableCell>
            <TableCell className="text-right">{invoice.quantidade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right"> {dados?.length && dados.map((produto: any) => produto.preco).reduce((acc: any, value: any)=> acc + value,0)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
