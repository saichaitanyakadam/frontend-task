"use client"
import Loader from '../../src/components/loader/Loader'


import React,{useState,useEffect} from 'react'
import membersLogo from "../../src/assets/members.svg"
import { projectCards } from '../../src/constants/Constants'
import ProjectCard from '../../src/components/projectCard/ProjectCard'

const Projects = () => {
  const [loading,setLoading]=useState(true)
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])
  return (
    <main>
      <div className='w-full flex justify-between'>
        <h2 className='font-bold text-2xl'>Projects</h2>
        <button type='button' className='bg-active text-white py-2 px-3 rounded-lg'>Add Project</button>
      </div>
      {loading?<Loader/>:<div className='flex flex-col'>
     <ul className='w-full mt-2 flex flex-col items-center list-none lg:flex-row gap-3 flex-wrap'>
     {projectCards.slice(count,count+8 ).map(item=>(
       <ProjectCard key={item.key} project={item}/>
     ))}
   </ul>
   <div className='self-end flex items-center'>
    <button type='button' className='mr-1 bg-cyan-700 text-white p-2' onClick={()=>{
        if (count>0) {
          setCount(prev=>prev-1)
        }
    }}>Prev</button>
    <p><span>{count+1}</span> of {Math.ceil(projectCards.length/8)}</p>
    <button type='button' className='ml-1 bg-cyan-700 text-white p-2' onClick={()=>{
        if (count<Math.floor(projectCards.length/8)) {
          setCount(prev=>prev+1)
        }
    }}>Next</button>
   </div>
   </div>
      }
    </main>
  )
}

export default Projects