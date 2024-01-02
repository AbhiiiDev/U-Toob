import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveContainer from './LiveContainer';



const WatchContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"))



  return (
    <>
      <div className='p-2 ml-20 flex flex-row'>
        <iframe width="750" height="400" className='rounded-md' src={"https://www.youtube.com/embed/" + searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


<div className=''>

      <LiveContainer/>
</div>


      </div>
      <div className='p-2 ml-20'>
        <CommentContainer />


      </div>
    </>
  )
}

export default WatchContainer