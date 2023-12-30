import React from 'react'

const list=["Music","Sports", "Movies", "Anima","Love","Motivation","Breakup","Personality","Career","Lifestyle"]


const ButtonContainer = () => {
  return (
    <div>
        {list.map((item,index)=> <button id={index} className='mx-2 p-1 rounded-lg border border-gray-200 bg-gray-100 hover:bg-gray-300'>{item}</button>)}
       
    </div>
  )
}

export default ButtonContainer  