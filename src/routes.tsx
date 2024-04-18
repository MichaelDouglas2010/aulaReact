import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Tarefas from './pages/tarefas'

const router = createBrowserRouter([
  {path: '/', element: <Home/>, errorElement: <NotFound/>},
  {path: '/sobre', element:<Sobre/>},
  {path:'/tarefas',element:<Tarefas/>}
])
export default router