import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Link} from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';

    

function PostForm({text, title,userId,userName}) {

    const [textarea, setText] = React.useState('');
    const [titlearea, setTitle] = React.useState('');
  
  
    const savePost = () => {
        fetch("http://localhost:8080/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
                title: titlearea,
                text: textarea,
                userId: userId,

        })
        
    }).then((response) => response.json())
    .then (data => {
        console.log(data.trace);
    });

}
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(titlearea,textarea);
        savePost();

    }
    return (
        
            <Card sx={{ width: 800  }}>
      <CardHeader
        avatar={
          <Link to={{pathname:'/users/'+userId}} style={{ textDecoration: 'none',color:"white",marginLeft:"20px" }}>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {userName.charAt(0).toUpperCase()}
          </Avatar>
          </Link>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<OutlinedInput 
            id="outlined-adorment-amount" 
            multiline 
            placeholder='Title' 
        inputProps={{maxLength:25}} 
        fullWidth 
        onChange={(e)=>setTitle(e.target.value)}
        
        
        >

        </OutlinedInput>}
         
      />
       
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <OutlinedInput id="outlined-adorment-amount" multiline placeholder='Text' inputProps={{maxLength:250}} fullWidth
        onChange={(e)=>setText(e.target.value)}
        endAdornment={<InputAdornment position="end">
        <Button variant="outlined"
        onClick={handleSubmit}
        >post it</Button>
        </InputAdornment>}
        >

        </OutlinedInput>
        </Typography>
      </CardContent>
     
      <Collapse  timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent>
      </Collapse>
    </Card>
            
       
    );
}

export default PostForm;