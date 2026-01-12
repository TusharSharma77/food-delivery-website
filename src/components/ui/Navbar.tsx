// import React from 'react'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between h-14">
//             <Link to="/">
//             <h1 className=' font-bold md:font-extrabold text-2xl'> SharmaEats</h1>
//             </Link>
//             <div className='hidden md:flex items-center gap-10'>
//               <div>
//                 <Link to="/">Home</Link>
//                  <Link to="/profile">Profile</Link>
//                 <Link to="/order/status">Order</Link>
//                 </div>  
//             </div>
//         </div>
//     </div>
//   )
// }
// export default Navbar
import React, { useState } from 'react'
import { ShoppingBag, User, Menu, X, Home, Package, UtensilsCrossed, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  DropdownMenu, 
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@radix-ui/react-menubar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const admin = true
  const { setTheme } = useTheme()

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end gap-4 text-sm">
            <Link to="/help" className="hover:underline !text-black">Help</Link>
            <Link to="/signup" className="hover:underline !text-black">Sign In</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-blue-500 p-3 rounded-xl">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-black text-2xl text-blue-600">SharmaEats</h1>
          </Link>
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" /> Home
            </Link>
            <Link to="/profile" className="flex items-center gap-2">
              <User className="w-5 h-5" /> Profile
            </Link>
            <Link to="/order/status" className="flex items-center gap-2">
              <Package className="w-5 h-5" /> Orders
            </Link>
            {admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className=" !bg-blue-500 font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-50">
                    Dashboard
                  </MenubarTrigger>
                  <MenubarContent className="bg-white border rounded-md shadow-md p-1">
                    <MenubarItem className="cursor-pointer">
                      <Link to="/admin/restaurant">Restaurant</Link>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/admin/menu">Menu</Link>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/admin/orders">Orders</Link>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="!bg-blue-500" variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=' !bg-blue-500' align="end">
                <DropdownMenuItem className='font-bold !bg-blue-50 hover:bg-blue-200 hover:zoom-in' onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem className='!bg-blue-50  font-bold hover:bg-blue-200' onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="!bg-blue-500 text-white px-5 py-2 rounded-lg flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Cart
            </button>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
