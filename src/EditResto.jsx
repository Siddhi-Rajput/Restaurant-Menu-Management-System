import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import RestoData from './RestoData';
import Common from './Common'

const EditResto = () =>{

    const {restoId} = useParams();
    const [data,setData] = useState(RestoData[restoId]);

    const [dishvalue,setDishvalue] = useState("");
    const [dish,setDish] = useState(data.dishes);

    const inputDish =(event)=>{
        setDishvalue( event.target.value);
    }

    const ListOfDish =()=>{
        if(dishvalue !== ""){
            setDish(()=>{
                return data.dishes[0].push(dishvalue);
            });
            setDishvalue("");
        }
        else{
            alert("Dish name cannot be empty");
        }
    }

    const removeDish = (id)=>{
        let datanew = data.dishes;
        setDish((datanew)=>{
            console.log(datanew);
            return datanew.filter((arrElem,index)=>{
                console.log(datanew);
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
        setDish(dish);
    }
    
    const formSubmit = (e) =>{
        e.preventDefault();
        RestoData[restoId] = data;
    }

    return(
         <Common details={data} dishValue={dishvalue} onChangeDish={inputDish} onAddDish={ListOfDish} dishArray={data.dishes[0]} onRemove={removeDish} heading="Edit Restaurant" button="Save Changes" menuButton="Edit Menu" buttonToggle="Edited Successfully" InpEvent={InpEvent} submit={formSubmit}/>
    )
}

export default EditResto;