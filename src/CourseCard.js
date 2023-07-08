import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CourseCard(props) {

    return (
        <Card sx={{ maxWidth: 480, minWidth: 480, height: 400, marginRight: 5, marginLeft: 5 ,marginTop:2,marginBottom:2}}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="logo192.png"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.courseName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.detailShort} 
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
  );
}