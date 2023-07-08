import * as React from 'react';
import {useState, useEffect} from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { Stack, Paper, Typography ,Grid} from '@mui/material';
import CourseCard from './CourseCard';

function HotCourseItems(props){
    const [listCourse, setListCourse] = useState([{}])
    
    const getHotCourseItems = async (id)=>{
        await axios.get(process.env.REACT_APP_API_MAIN+"/category/hot-courses/"+props.id)
        .then(res=>{
          setListCourse(res.data)
        }).catch(e=>{
          console.log(e);
        })
    }
    useEffect(() => {
      const init =async ()=>{
          await getHotCourseItems()
      }
      init()
  }, []);
    return(
        <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 540,
                  }}
                >
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        {props.name}
                    </Typography>
                    < Grid display={'flex'} direction={'row'} overflow={"scroll"} >
                    {
                      listCourse.map((course)=>{
                                           
                      return(
                        <CourseCard/>
                      )})
                    }
                    </Grid>
                    
                    
                </Paper>
          </Grid>
    )
}
export default HotCourseItems;