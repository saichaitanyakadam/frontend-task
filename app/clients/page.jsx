"use client"
import {useEffect, useState} from "react"
import Loader from "../../src/components/loader/Loader"

const Clients=()=> {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])
  return (
    <main>
    <div className='w-full flex justify-between'>
      <h2 className='font-bold text-2xl'>Clients</h2>
      <button type='button' className='bg-active text-white py-2 px-3 rounded-lg'>Add Project</button>
    </div>
    {loading?<Loader/>:
    <div className="flex justify-center items-center h-[80vh]"><h1 className="text-3xl font-bold">Clients</h1></div>
    }
  </main>
  )
}

export default Clients