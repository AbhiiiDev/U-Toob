import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveContainer from './LiveContainer';
import { addMessage } from '../utils/chatSlice';



const WatchContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"))

const [text,setText]=useState("");
  return (
    <>
      <div className='p-2 ml-20 flex flex-row'>
        <iframe width="750" height="400" className='rounded-md' src={"https://www.youtube.com/embed/" + searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


<div className=''>

      <LiveContainer/>
      <form onSubmit={((e)=>
      {e.preventDefault();
      dispatch(addMessage({
        name:"Abhishek",
        message:text
      }))
      setText("");}
  
      )}>
        <input className='ml-5 w-72  p-1 border border-black' type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className='border border-black ml-1 p-1'>Send</button>
      </form>
</div>


      </div>
      <div className='p-2 ml-20'>
        <CommentContainer />


      </div>
    </>
  )
}

export default WatchContainer