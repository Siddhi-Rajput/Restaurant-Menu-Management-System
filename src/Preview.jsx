import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import static_food_img from '../src/images/food2.jpg'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    maxWidth: 700,
    width:700,
  },
  media: {
    height: 0,
    paddingTop: '45.90%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

 const Preview = (props) => {

  const [dish, setdish] = useState(props.data.dishes[0]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div>
      <Button className="button-blue" aria-describedby={id} onClick={handleClick}>
      <VisibilityIcon/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
      <Typography className={classes.typography}>
          <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={props.data.name}
        subheader={props.data.city}
      />
      <CardMedia
        className={classes.media}
        image={static_food_img}
        title={props.data.name}
      />
      <CardContent>
        <h6> Phone Number : {props.data.phone}</h6>
        <h6> Email Id : {props.data.email}</h6>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.data.desc}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        <h6> Menu : </h6>
        </Typography>
        {dish.map((val)=>{
          return <Typography variant="body2" color="textSecondary" component="p">
          <li>{val}</li>
        </Typography>
        })}
        
      </CardContent>
    </Card>
        </Typography>
      </Popover>
    </div>
  );
}

export default Preview;