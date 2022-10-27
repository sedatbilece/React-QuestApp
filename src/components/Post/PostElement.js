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


    

function PostElement({text, title,userId,userName}) {

    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
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
        title={title}
         
      />
       
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {text}
        </Typography>
      </CardContent>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent>
      </Collapse>
    </Card>
            
       
    );
}

export default PostElement;