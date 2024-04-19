import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' // utilizamos a chave quando temos varios arquivos sento exportado daquele arq
import router from './routes'
import Header from './pages/header/hearder';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
