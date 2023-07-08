import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';

function MainListItems(props){
    
    return(
        <React.Fragment>
            {props.listCategory.map((element) => {
                return(
                    <ListItemButton key={element.id}>
                        <ListItemText primary={element.name}/>
                    </ListItemButton>
                )
            })}
        </React.Fragment>
    )
}
export default MainListItems;