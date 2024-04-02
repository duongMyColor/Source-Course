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

    // const handAddnewPost = async(post:postDataType)=>{
    //     // setDataPost((existingsPost)=>[post,...existingsPost])
    //     const addNewData = await fetch('http://localhost:8080/posts',{
    //         method: "POST",
    //         body:JSON.stringify(post),
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }

    //     })
    //     const content = await addNewData.json();
    //     console.log("content:",content)

    //     getFetchData()
    // }


    
    
    return (
        <div>

           
            <ul className={classes.posts}>
                {dataPost.length>0 && dataPost.map((post,idx)=>{
                    return(
                        <Post key={idx} author={post.enterAuth} body={post.enterBody}/>
                    )
                }) }

            </ul>
           
        </div>
    );
}

export default PostList;