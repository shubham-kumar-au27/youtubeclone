import React from 'react'
import Button from './Button'

const Buttonlist = () => {
    const btnList = ["All","Gaming","Songs","Live","Soccer","Cricket","News","Cooking","Valentines"]
  return (
    <div className='flex'>
        {
            btnList.map(btns => <Button name={btns}/>)
        }
      
       
    </div>
  )
}

export default Buttonlist
