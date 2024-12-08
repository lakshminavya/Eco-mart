import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Laptops.css";
const Laptops = ()=>{
    
    const [laptops,setLaptops] = useState([]);

    const navigate = useNavigate();

    const get_laptops = async ()=>{
        const result = await axios.get(`http://localhost:8081/laptops`);
        const {data} = result;
        console.log(data);
        setLaptops(data);
    }
    
    useEffect(()=>{
        get_laptops();
    },[]);
    
    const fetch_details = (element)=>{
        navigate(`/dashboard/laptops/${element.pid}`) 
    }


    return(
        <>
            <div className="parent">
                {
                   laptops.map((element,index)=>{
                      return(<div className="child" key={index} onClick={()=> fetch_details(element)}>
                          <img src={element.pimage} style={{width:250,height:250}}></img>
                          <h2>{element.pname}</h2>
                          <h3>{element.pcost}</h3>
                      </div>
                    )}) 
                    
                }
            </div>
        </>
    )
}
export default Laptops;