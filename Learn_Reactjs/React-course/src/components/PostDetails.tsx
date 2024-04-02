import {useParams } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';
import { useEffect, useState } from 'react';
import { postDataType } from './NewPost';

function PostDetails() {

    const {postId} = useParams()
    const [postDetail,setPostDetail] = useState<postDataType>()


    const getDetail = async(id:string | undefined)=>{
        const getPostDetail = await fetch(`http://localhost:8080/posts/${id}`)
        const resData = await getPostDetail.json()

        setPostDetail(resData.post)
    }


    useEffect(()=>{
        // console.log( urlParagram.postId)
        getDetail(postId)
    },[])


//   if (!post) {
//     return (
//       <Modal>
//         <main className={classes.details}>
//           <h1>Could not find post</h1>
//           <p>Unfortunately, the requested post could not be found.</p>
//           <p>
//             <Link to=".." className={classes.btn}>
//               Okay
//             </Link>
//           </p>
//         </main>
//       </Modal>
//     );
//   }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{postDetail?.enterAuth}</p>
        <p className={classes.text}>{postDetail?.enterBody}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;