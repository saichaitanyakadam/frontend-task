"use client"

import { createContext, useState } from 'react'
import {usePathname} from "next/navigation"
import './globals.css'
import Sidebar from '../src/components/sidebar/Sidebar'
import Header from '../src/components/header/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const SidebarContext=createContext()


export default function RootLayout({ children }) {
  const [show,setShow]=useState(false)
  const pathname=usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarContext.Provider value={{show,setShow}}>
        <main className='flex'>
      <Sidebar params={pathname} />
      <div className='flex flex-col lg:w-[80vw] lg:relative lg:left-[20vw]'>
        <Header />
        <div className='p-3'>
          {children}
        </div>
      </div>
    </main></SidebarContext.Provider></body>
    </html>
  )
}
