import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    minWidth:250
  },
  desc:{
    fontSize:20
  },
  price:{
    fontSize:20,
  }
});

export const Cardlist = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <>
    <Box m={4} key={props.key} >
    <Card className={classes.root} >
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography className={classes.price} variant="body2" color="textSecondary" component="p">
            {'$' + props.price}
            </Typography>
            <Typography className={classes.desc} color="textSecondary">
              {props.descr}
            </Typography>
        </CardContent>
        </CardActionArea> 
  </Card>  
  </Box>
    </>
  );
}
