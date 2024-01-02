import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex p-1 m-1 items-center'>
          <img className='h-11 cursor-pointer' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfF_0m15ftLpDilh8B5f41cbF_pMNCdbSqw&usqp=CAU' alt='profile'/>
<p>
    {name} 
</p>
<p className='font-light ml-2'>
{message}
</p>
    </div>
  )
}

export default ChatMessage