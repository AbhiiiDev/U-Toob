import React from 'react';
import Comment from './Comment';


const CommentData=[
  {
    name:"Abhishek Verma",
    text:"hey this is my comment",
    replies:[
    ]
  },
  {
    name:"Abhishek Verma",
    text:"hey this is my comment",
    replies:[
      {
        name:"Abhishek Verma",
        text:"hey this is reply of my comment",
        replies:[
          {
            name:"Abhishek Verma",
            text:"hey this is reply of reply of my comment",
            replies:[
              {
                name:"Abhishek Verma",
                text:"hey this is reply of reply of my comment",
                replies:[
                  {
                    name:"Abhishek Verma",
                    text:"hey this is reply of reply of my comment",
                    replies:[
                      {
                        name:"Abhishek Verma",
                        text:"hey this is reply of reply of my comment",
                        replies:[
                          {
                            name:"Abhishek Verma",
                            text:"hey this is reply of reply of my comment",
                            replies:[
                            ]
                          },
                        ]
                      },
                    ]
                  },
                ]
              },
              {
                name:"Abhishek Verma",
                text:"hey this is reply of reply of my comment",
                replies:[
                ]
              },
            ]
          },
          {
            name:"Abhishek Verma",
            text:"hey this is reply of reply of my comment",
            replies:[
            ]
          }
        ]
      },
      {
        name:"Abhishek Verma",
        text:"hey this is reply of my comment",
        replies:[
        ]
      },
      {
        name:"Abhishek Verma",
        text:"hey this is reply of my comment",
        replies:[
        ]
      }
    ]
  },
  {
    name:"Abhishek Verma",
    text:"hey this is my comment",
    replies:[
    ]
  },
  {
    name:"Abhishek Verma",
    text:"hey this is my comment",
    replies:[
    ]
  },
  {
    name:"Abhishek Verma",
    text:"hey this is my comment",
    replies:[
    ]
  }
]



const CommentList=({comments})=>
{
  return comments.map((comment)=>
(
<>
<div>
<Comment info={comment}/>
<div className='ml-8 border-l-2'>
 <CommentList comments={comment.replies}/>
</div>
</div>
</>


)


)}



const CommentContainer = () => {
  return (
    <>
    <div className='mx-2 my-2 font-bold'>
      Comments:
    
    </div>
  
   <CommentList comments={CommentData}/>
 
    </>
  )
}

export default CommentContainer