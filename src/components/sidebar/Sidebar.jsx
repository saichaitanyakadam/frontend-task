import React, { useContext } from 'react'
import Link from "next/link"
import Image from 'next/image'
import profile from "../../../src/assets/profile.svg"
import {GoHome} from "react-icons/go"
import {AiOutlineFundProjectionScreen,AiOutlineSetting} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"
import {BsPeople,BsXLg} from "react-icons/bs"
import {PiSquaresFourLight} from "react-icons/pi"
import logo from "../../../src/assets/logo.svg"
import { SidebarContext } from '../../../app/layout'

const Sidebar = ({params}) => {
  const {show,setShow}=useContext(SidebarContext)
  return (
    <div className={`px-5 w-[50vw] md:w-[40vw] bg-white drop-shadow-2xl ${show?"left-0":"left-[-100%]"} lg:left-0 shadow-2xl flex flex-col justify-between lg:w-[20vw] h-screen absolute lg:fixed`}>
   <div className='w-full flex flex-col justify-start'>
   <BsXLg className='text-[1.5rem] lg:hidden absolute top-2 left-2' onClick={()=>{
          setShow(false)
        }}/>
        <Link href="/" className='w-full flex justify-center'>
    <Image alt="logo" src={logo} width={100} height="auto" className='self-center' /></Link>
      <ul className='mt-3 space-y-2 text-[#A1A1A1]'>
        <Link href="/"><li onClick={()=>{
          setShow(false)
        }} className={`flex items-center px-3 py-2 rounded-lg ${params==="/" && "bg-active"}`}><GoHome className='mr-3'/><p>Dashboard</p></li></Link>
        <Link href="/projects"><li onClick={()=>{
          setShow(false)
        }} className={`flex items-center px-3 py-2 rounded-lg ${params==="/projects" && "bg-active"}`}><AiOutlineFundProjectionScreen className='mr-3'/><p>Projects</p></li></Link>
        <Link href="/team"><li onClick={()=>{
          setShow(false)
        }} className={`flex items-center px-3 py-2 rounded-lg ${params==="/team" && "bg-active"}`}><PiSquaresFourLight className='mr-3'/><p>Team</p></li></Link>
        <Link href="/clients"><li onClick={()=>{
          setShow(false)
        }} className={`flex items-center px-3 py-2 rounded-lg ${params==="/clients" && "bg-active"}`}><BsPeople className='mr-3'/><p>Clients</p></li></Link>
        <Link href="/settings"><li onClick={()=>{
          setShow(false)
        }} className={`flex items-center px-3 py-2 rounded-lg ${params==="/settings" && "bg-active"}`}><AiOutlineSetting className='mr-3'/><p>Settings</p></li></Link>
      </ul>
      <button className='border border-cyan-500 text-cyan-500 py-2 rounded-lg mt-3 self-stretch' type="button">+ New Project</button>
      </div>
      <div className='flex items-center mb-2'>
        <Image src={profile} alt="profile" width={60} height="auto" />
        <div className='ml-2'>
          <p className='font-medium'>Varun Kubal</p>
          <p className='text-[#909090] text-[10px]'>Senior</p>
        </div>
        <FiLogOut className='ml-auto text-[#909090] hover:text-[24px]'/>
      </div>
    </div>
  )
}

export default Sidebar