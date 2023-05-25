import React from 'react'
import Home from './Home'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-red-500 w-60 h-screen p-3 flex flex-col text-white'>
        <div className='m-4 border-b-4 border-gray-600'>
            <NavLink to='/'>
                <div className='m-4'>
                    
                <h1 >Home</h1>
                </div>
            </NavLink>
        </div>
        <div className='m-4 border-b-4 border-gray-600'>
      
            <NavLink to='/contact'>
                <div className='m-4 '>

                <h1>Map</h1>
                </div>
            </NavLink>
        </div> 
        <div className='m-4 border-b-4 border-gray-600'>
        
            <NavLink to='/form'>
                <div className='m-4'>

                <h1>Contact Form</h1>
                </div>
            </NavLink>
        </div>

    </div>
  )
}

export default Sidebar