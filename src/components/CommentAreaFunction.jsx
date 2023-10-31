import { Component, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = () => {
 const [isLoading,setisLoading] = useState (false);
 const [isError,setisError] = useState (false);
 const [comments,setcomments] = useState ();
 
    return (
      <div className="text-center">
        {{isLoading} && <Loading />}
        {{isError} && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  }


export default CommentArea