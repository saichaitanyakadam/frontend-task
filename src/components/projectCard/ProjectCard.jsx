import React from 'react'
import membersLogo from "../../assets/members.svg"
import {BsDot,BsThreeDotsVertical} from "react-icons/bs"
import Image from "next/image"


const ProjectCard = ({project}) => {
  return (
    <li className='w-[80%] lg:w-[23%] p-2 shadow-lg flex flex-col' >
          <div className={`h-[100px] w-full flex justify-center rounded-md items-center ${project.name==="Abbott" && "bg-blue-800"}`}>

          <Image src={project.logo} alt="company-logo" width={100} height="auto" className='self-center'/>
          </div>
          <div className='flex justify-between mt-1 items-center'>

          <h3 className='text-[1rem] font-bold'>{project.name}</h3>
          <BsThreeDotsVertical />

          </div>
          <p className='text-[0.7rem] text-[#A1A1A1]'>{project.description}</p>
          <div className='flex justify-between items-center'><div className='flex items-center'><BsDot className='text-green-500 text-3xl'/><p className='text-[0.8rem] text-[#828282]'>{project.date}</p></div>
          <Image src={membersLogo} alt="members" width={100} /></div>
        </li>
  )
}

export default ProjectCard