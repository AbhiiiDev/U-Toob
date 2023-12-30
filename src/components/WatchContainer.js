import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';


const WatchContainer = () => {
    const dispatch=useDispatch();
useEffect(() => {
  dispatch(closeMenu());
}, [])

const [searchParam]=useSearchParams();
console.log(searchParam.get("v"))



  return (
    <div className='p-2 flex'>
    <iframe width="1000" height="450" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


    </div>
  )
}

export default WatchContainer