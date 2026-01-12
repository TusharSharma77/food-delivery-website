import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import MainLayout from './MainLayout'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import Navbar from './components/ui/Navbar'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
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
      {
        path: "Resetpassword",
        element: <ResetPassword />,
      },
       {
        path: "VerifyEmail",
        element: <VerifyEmail />,
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
