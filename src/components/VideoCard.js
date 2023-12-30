import React from 'react'

const VideoCard = ({info}) => {

    // console.log(info)
 const {snippet,statistics}=info;
 const {title,channelTitle,thumbnails}=snippet;
 const {viewCount}=statistics;



  return (
    <div className='p-1 m-1 w-72'>
        <img className='m-1' src={thumbnails.medium.url} alt='thumb'/>
<ul className='m-1'>
    
<li>{title}</li>
<li className='mt-1 font-light text-md'>{channelTitle}</li>
<li className='my-1 font-light'>{viewCount} views</li>
</ul>
    </div>
  )
}

export default VideoCard    