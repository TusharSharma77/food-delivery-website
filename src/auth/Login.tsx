import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, LockKeyhole, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { Link } from "react-router-dom"
import { useState, type ChangeEvent, type FormEvent } from "react"

import type { LoginInputState } from "@/schema/userSchema"

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput(prev => ({ ...prev, [name]: value }))
  }

  const loginSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    console.log("Login submitted:", input)
    // Simulate async login
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-50 px-4">
      <form
        onSubmit={loginSubmitHandler}
        className="w-full max-w-sm sm:max-w-md mx-auto p-5 sm:p-6 md:p-8 border border-gray-100 rounded-xl flex flex-col gap-5 sm:gap-6 bg-white shadow-sm"
      >
        <div className="text-center mb-2">
          <h1 className="font-bold text-lg sm:text-xl tracking-wide">
            FOODIE SHARMA
          </h1>
        </div>

        <div className="flex flex-col gap-2 relative">
          <Label className="text-center text-sm sm:text-base">Email</Label>
          <Input
            name="email"
            type="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="email"
            className="pl-8 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-10 left-1 text-gray-400 pointer-events-none" />
        </div>

        <div className="flex flex-col gap-2 relative">
          <Label className="text-center text-sm sm:text-base">Password</Label>
          <Input
            name="password"
            type="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="password"
            className="pl-8 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-10 left-1 text-gray-400 pointer-events-none" />
        </div>

        <div className="mb-10">
          {loading ? (
            <Button className="w-full !bg-blue-500 hover:!bg-blue-600 !text-white">
              <Loader2 className="animate-spin mr-2 h-4" /> Please wait
            </Button>
          ) : (
            <Button className="w-full !bg-blue-500 hover:!bg-blue-600 !text-white">
              Login
            </Button>
          )}
        </div>

        <Separator />

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
