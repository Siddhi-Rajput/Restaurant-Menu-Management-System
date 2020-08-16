import React from 'react';
import {NavLink} from 'react-router-dom';
import RestoData from './RestoData';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Preview from './Preview';

const RestoList = () =>{


    return(
        <div className="main-div">
            <div className='table-row-main-div table-main-header'>
                <div className="container-fluid table-row-child-div table-header">
                    <div>Name</div>
                    <div>Phone Number</div>
                    <div >Email ID</div>
                    <div>City</div>
                    <div >Actions</div>
                </div>
            </div> 
            {RestoData.map((val,index)=>{
                return ( 
                    <div className='table-row-main-div' key={index}>
                        <div className="container-fluid table-row-child-div">
                            <div style={{marginLeft:"20px"}}>{val.name}</div>
                            <div style={{marginLeft:"40px"}}>{val.phone}</div>
                            <div style={{marginLeft:"50px"}}>{val.email}</div>
                            <div style={{marginLeft:"10px"}}>{val.city}</div>
                            <div  style={{marginRight:"-10px"}}>
                            <NavLink exact  to={`/editResto/${index}/`}>
                                <Button className='button-blue'><EditIcon/></Button>
                            </NavLink>
                                <Button><Preview data={val}/></Button>
                            </div>
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}

export default RestoList;