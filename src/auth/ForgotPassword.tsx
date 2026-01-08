import React, { useState } from 'react'
import { Mail } from "lucide-react"

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form className="flex flex-col gap-5 w-full max-w-sm bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
        
        <div className="text-center">
          <h1 className="font-extrabold">
            Forgot Password
          </h1>
          <p className="text-sm text-gray-600">
            Enter your email to reset your password
          </p>
        </div>

        <div className="flex flex-col gap-2 relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full !bg-blue-500 hover:!bg-blue-600 !text-white"
        >
          Send Reset Link
        </button>

      </form>
    </div>
  )
}

export default ForgotPassword
