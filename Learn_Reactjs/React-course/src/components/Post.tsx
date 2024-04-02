import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post(props:any) {
  return (
    <Link to={`/${props.id}`} className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </Link>
  );
}

export default Post;
