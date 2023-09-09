import React from 'react'
import {Oval} from "react-loader-spinner"

const Loader = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
    <Oval height={50}
    width={50}
    color="#053BD3"
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#03EAEA"
    strokeWidth={2}
    strokeWidthSecondary={2}/></div>
  )
}

export default Loader