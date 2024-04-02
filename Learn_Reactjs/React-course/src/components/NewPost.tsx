import { SyntheticEvent, useState } from 'react';
import classes from './NewPost.module.css';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Modal from './Modal';

// interface NewPostProps {

//     // oncancel:()=>void
//     onAddNewPost:(postData:postDataType)=>void
// }

export interface postDataType {
  enterBody:string,
  enterAuth:string,
  id:string
}

function NewPost() {
  const [enterBody,setEnterBody] = useState('')
  const [enterAuth,setEnterAuth] = useState('')

  const navigate = useNavigate()

  const bodyChangeText =(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
      setEnterBody((e.target.value))
  }
  const authChangeText =(e:React.ChangeEvent<HTMLInputElement>)=>{
      setEnterAuth(e.target.value)
  }

  const handAddnewPost = async(post:postDataType)=>{
    // setDataPost((existingsPost)=>[post,...existingsPost])
    const addNewData = await fetch('http://localhost:8080/posts',{
        method: "POST",
        body:JSON.stringify(post),
        headers:{
            'Content-Type': 'application/json'
        }

    })
    const content = await addNewData.json();
    console.log("content:",content)

}

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    let postData:postDataType = {
      enterBody:enterBody,
      enterAuth:enterAuth,
      id:''
    }
    handAddnewPost(postData)
    navigate('/')


    

  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeText}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authChangeText}/>
      </p>
      <p className={classes.actions}>
        <Link to='/' type='submit' >Cancel</Link>
        <button type='submit' onClick={()=>handleSubmit}>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;