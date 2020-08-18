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
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>Phone Number</td>
                            <td >Email ID</td>
                            <td>City</td>
                            <td >Actions</td>
                        </tr>
                    </table>
                    
                </div>
            </div> 
            {RestoData.map((val,index)=>{
                return ( 
                    <div className='table-row-main-div' key={index}>
                        <div className="container-fluid table-row-child-div">
                            <table>
                                <tr>
                                    <td >{val.name}</td>
                                    <td >{val.phone}</td>
                                    <td >{val.email}</td>
                                    <td >{val.city}</td>
                                    <td >
                                        <NavLink exact  to={`/editResto/${index}/`}>
                                            <Button className='button-blue'><EditIcon/></Button>
                                        </NavLink>
                                            <Button><Preview data={val}/></Button>
                                    </td>
                                </tr>
                            </table>
                            
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}

export default RestoList;