import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' // utilizamos a chave quando temos varios arquivos sento exportado daquele arq
import router from './routes'
import { ChakraProvider } from '@chakra-ui/react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router= {router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
