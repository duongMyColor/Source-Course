import { useEffect, useState } from "react";
import NewPost, { postDataType } from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css"
import Modal from "./Modal";
import { Outlet } from "react-router-dom";

// interface PostListProps {
//     isPost: boolean,
//     stopModelPost:()=>void
// }
function PostList() {

    const [dataPost, setDataPost]= useState<postDataType[]>([])

    useEffect(()=>{
        getFetchData()
    },[])

    const getFetchData = async()=>{
        const getData = await fetch('http://localhost:8080/posts',)
        const resData = await getData.json()
        setDataPost(resData.posts)
    }

    return (
        <div>

           
            <ul className={classes.posts}>
                {dataPost.length>0 && dataPost.map((post,idx)=>{
                    return(
                        <Post key={idx} author={post.enterAuth} body={post.enterBody} id={post.id}/>
                    )
                }) }

            </ul>
           
        </div>
    );
}

export default PostList;