import React, { useEffect, useState } from 'react'
import { VIDEO_URL } from '../constansts/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ButtonContainer from './ButtonContainer';
import { VideoImageCard } from './VideoCard';


const VideoContainer = () => {
  const [videoItem,setVideoItems]=useState([]);
 
  useEffect(() => {
    videoSync();
  }, [])

  const videoSync=async()=>{
    const data=await fetch(VIDEO_URL);
    const json= await data.json();
     setVideoItems(json.items)
    //  console.log(json.items)
 
  }
 
  return (
   <>
       <ButtonContainer/>
      
       <div className='flex flex-wrap'>
        {videoItem[0] && <VideoImageCard info={videoItem[0]}/>}
        

     {videoItem.map(video=> <Link key={video.id} to={'/watch?v='+video.id}><VideoCard key={video.id} info={video}/> </Link>)}
  
    </div>
      
   </>
    
  )
}

export default VideoContainer