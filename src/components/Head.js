import React, { useState ,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import {YOUTUBE_SEARCH_API} from "../utils/constants"
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
    const dispatch = useDispatch();
    const [searchQuery,setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [suggestionIsOpen,setSuggestionIsOpen] = useState(false)
    
    const searchCache = useSelector((store)=>store.search)
   

    // searchCache = {
    //     "iphone":["iphone 11","iphone14"]
    // }
    // searchQuery = iphone

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())
      

    }
    useEffect(()=>{
        
          //make an api call after everykeyPress---
        //But If the difference between 2 API calls is <200ms
        //decline the API call---
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            getSearchSuggestions()
        },200)

        return ()=>{
            clearTimeout(timer)
        }


    },[searchQuery])

    const getSearchSuggestions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        console.log(json)
        setSuggestions(json[1]);

        //update cache--
        dispatch(cacheResults({
            [searchQuery]:json[1]

        }))
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
            <div>
                
            <input type='text' 
            className='w-1/2 border-2 border-black p-2 rounded-l-full'
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>{setSuggestionIsOpen(true)}}
            onBlur={()=>{setSuggestionIsOpen(false)}}
            />
            <button className='border border-gray-400 p-2 rounded-r-full'>🔎</button>
            </div>
            {
                suggestionIsOpen && (
                    <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-200">
                    <ul>
                        {
                            suggestions?.map(s =>  <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔎{s}</li> )

                        } 
                    </ul>
                </div>
                )
            }
        </div>

        <div className='col-span-1'>
            <img alt='userIcon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' className='w-20 h-8'/>
        </div>
    </div>
  )
}

export default Head
