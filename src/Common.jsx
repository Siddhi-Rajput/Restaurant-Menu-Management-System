import React,{useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    list: {
      width: 300
    },
    fullList: {
      width: "auto"
    }
  });

const Common = (props) =>{

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        restoName: props.details.name
      });
    
      const { vertical, horizontal, open, restoName } = state;
    
      const handleClick = (newState) => () => {
        if(props.details.name !== ""){ 
            setState({ open: true, ...newState });
        }
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };

      const classes = useStyles();
        const [drawerState, setdrawerState] = React.useState({
            left: false
        });

        const toggleDrawer = (anchor, open) => (event) => {
            if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
            ) {
            return;
            }

            setdrawerState({ ...drawerState, [anchor]: open });
        };

        const list = (anchor) => (
            <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "left"
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            >
            <List>
                <ListItem button>
                    <div className="mb-3">
                        <label className="form-label">Dishes</label>
                        <div className=' d-flex justify-content-start'>
                            <div>
                            <input type="text" className="form-control" placeholder="Add a Dish" onChange={props.onChangeDish} value={props.dishValue}/>
                            </div>
                            <div>
                            <Button onClick={props.onAddDish} className='button-green'><AddIcon/></Button>
                            </div>
                        </div>
                         {props.dishArray.map((ItemsList,index)=>{
                            return(
                            <div id={index} key={index} className=' d-flex justify-content-start mt-3'>
                                <div style={{marginLeft:"-15px"}}>
                                    <Button onClick={()=>{props.onRemove(index)}} className="button-red">
                                        <DeleteIcon />
                                    </Button>
                                </div>
                                <div className='ml-3'>
                                    <li>{ItemsList}</li>
                                </div>
                            </div>
                            )
                        }) } 
                        </div>  
                </ListItem>
            </List>
            </div>
        );

    return(
        <>
            <div className='my-6 common-header-css'>
                <h1 className='text-center'>{props.heading}</h1>
                <div className="col-8 button-menu">
                    {[props.menuButton].map((anchor) => (
                        <React.Fragment key={anchor}>
                        <button className="btn btn-outline-primary" onClick={toggleDrawer("left", true)}>{anchor}</button>
                        <SwipeableDrawer
                            anchor="left"
                            open={drawerState["left"]}
                            onClose={toggleDrawer("left", false)}
                            onOpen={toggleDrawer("left", true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>
                <div className='container contact_div'>
                    <div className='row'>
                        <div className='col-md-6 col-10 mx-auto my-3'>
                            <form onSubmit={props.submit}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"  name='name' value={props.details.name} onChange={props.InpEvent} placeholder="Enter name"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={props.details.phone} onChange={props.InpEvent} placeholder="Enter number"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={props.details.email} onChange={props.InpEvent} placeholder="Enter email id"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name='city' value={props.details.city} onChange={props.InpEvent} placeholder="Enter city"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='desc' value={props.details.desc} onChange={props.InpEvent}></textarea>
                                </div>
                                <div className="col-8">
                                    <button className="btn btn-outline-primary" type="submit" onClick={handleClick({ vertical: 'bottom', horizontal: 'left',restoName: `${props.details.name}`})}>{props.button}</button>
                                    <Snackbar
                                    anchorOrigin={{ vertical, horizontal }}
                                    open={open}
                                    onClose={handleClose}
                                    message={`${restoName} ${props.buttonToggle}`}
                                    key={vertical + horizontal}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common;