import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import MainLayout from './MainLayout'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    
  
])

function App() {
  return (
    <main>
   <RouterProvider router={appRouter} />
    </main>
   
  )
}

export default App
