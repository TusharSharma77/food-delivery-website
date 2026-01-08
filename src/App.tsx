import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import MainLayout from './MainLayout'
import ForgotPassword from './auth/ForgotPassword'

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
       {
        path: "forgot-password",
        element: <ForgotPassword />,
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
