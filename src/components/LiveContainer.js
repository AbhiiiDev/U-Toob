import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomNames } from './helper/randomNames';
import { generateRandomText } from './helper/randomMessage';
import { randomEmoji } from './helper/randomEmoji';

const LiveContainer = () => {

const dispatch=useDispatch();

useEffect(()=>
{
const timer=setTimeout(() => {
   
    //callling api
    console.log('api reqst');

dispatch(addMessage({
    name:generateRandomNames(),
    message:generateRandomText(10)+randomEmoji(),
}))
}, 500);

return ()=>  clearTimeout(timer);


},) //remove the dependancy array to repeat after 2secs


const messages=useSelector((store)=>store.chat.message);


  return (
    <div className='ml-5 border border-gray-950 w-[350px] h-[400px] bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
        {
            
        messages.map((message)=><ChatMessage name={message.name} message={message.message}/>)            
            }

    </div>
  )
}

export default LiveContainer