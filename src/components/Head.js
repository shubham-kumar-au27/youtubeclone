import React from 'react';
import {useDispatch} from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch()

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())

    }

  return (
    <div className='grid grid-flow-col m-2 p-5 shadow-lg'>
        <div className='flex col-span-1 '>
        <img alt='menu' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' 
        onClick={()=> toggleMenuHandler()}
        className='w-8 h-8 cursor-pointer'/>

        <img alt='youtube' 
        src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'
        className='w-20 h-8 ml-3'
        />
        </div>
        <div className='col-span-10 px-10'>
            <input type='text' className='w-1/2 border-2 border-black p-2 rounded-l-full'/>
            <button className='border border-gray-400 p-2 rounded-r-full'>Search</button>
        </div>

        <div className='col-span-1'>
            <img alt='userIcon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' className='w-20 h-8'/>
        </div>
    </div>
  )
}

export default Head
