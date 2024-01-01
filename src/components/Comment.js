

import React from 'react'

const Comment = ({info}) => {
  return (
    <div className="flex ml-2 p-2 m-2 bg-gray-100 shadow-md w-[600px]">
   <div>
<img className='h-11 cursor-pointer' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfF_0m15ftLpDilh8B5f41cbF_pMNCdbSqw&usqp=CAU' alt='profile'/>

    </div>
    <div className='mx-2 '>
        {info.name}
        <p>
            {info.text}
        </p>
        <p>
        
        </p>
     
    </div>
    </div>
  )
}

export default Comment