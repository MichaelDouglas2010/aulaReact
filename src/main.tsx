import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' // utilizamos a chave quando temos varios arquivos sento exportado daquele arq
import router from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
