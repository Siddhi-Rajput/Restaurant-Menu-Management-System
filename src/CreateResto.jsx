import React, { useState } from 'react';
import RestoData from './RestoData';
import Common from './Common';

const CreateResto = () =>{

    const [data,setData] = useState({
            name:"",
            phone:"",
            email:"",
            city:"",
            desc:"",
            dishes:[],
    });

    const [dishvalue,setDishvalue] = useState("");
    const [dish,setDish] = useState([]);

    const inputDish =(event)=>{
        setDishvalue( event.target.value);
    }

    const ListOfDish =()=>{
        if(dishvalue !== ""){
            setDish((oldItems)=>{
                return [...oldItems, dishvalue];
            });
            setDishvalue("");
        }
        else{
            alert("Dish name cannot be empty");
        }
    }

    const removeDish = (id)=>{
        setDish((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            });
        })
    } 

    const InpEvent = (event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        if(data.name === ""){
            alert("Kindly fill atleast name of the restaurant");
        } 
        else{
            data.dishes.push(dish);
            console.log(RestoData[0]);
            console.log(data);
            RestoData.push(data);
            setData(()=>{
                return{
                    name:"",
                    phone:"",
                    email:"",
                    city:"",
                    desc:""
                }
            })
            setDish([]);
        }
    }

    return(
        <>
            <Common details={data} dishValue={dishvalue} onChangeDish={inputDish} onAddDish={ListOfDish} dishArray={dish} onRemove={removeDish} heading="Create New Restaurant" button="Add Restaurant" menuButton="Add Menu" buttonToggle="added Successfully" InpEvent={InpEvent} submit={formSubmit}/>
        </>
    )
}

export default CreateResto;