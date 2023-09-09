"use client"
import Loader from '../../src/components/loader/Loader'


import React,{useState,useEffect} from 'react'
import membersLogo from "../../src/assets/members.svg"
import { projectCards } from '../../src/constants/Constants'
import ProjectCard from '../../src/components/projectCard/ProjectCard'

const Projects = () => {
  const [loading,setLoading]=useState(true)
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
      {loading?<Loader/>:
     <ul className='w-full mt-2 flex flex-col items-centerpl-0 lg:flex-row gap-3 flex-wrap'>
     {projectCards.map(item=>(
       <ProjectCard key={item.key} project={item}/>
     ))}
   </ul>
      }
    </main>
  )
}

export default Projects