import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Laptops.css";
const Headphones = ()=>{
    
    const navigate = useNavigate();

    const [laptops,setLaptops] = useState([]);

    const get_laptops = async ()=>{
        const result = await axios.get(`http://localhost:8081/headphones`);
        const {data} = result;
        console.log(data);
        setLaptops(data);
    }
    
    useEffect(()=>{
        get_laptops();
    },[]);


    const fetch_details = (element)=>{
        navigate(`/dashboard/headphones/${element.pid}`) 
    }
    
    return(
        <>
            <div className="parent">
                {
                   laptops.map((element,index)=>{
                      return(<div className="child" key={index} onClick={()=> fetch_details(element)}>
                          <img src={element.pimage} style={{width:250}}  ></img>s
                          <h5 style={{ fontSize: '30px' }}>{element.pname}</h5>
                          <h6 style={{ fontSize: '20px' }}>{element.pcost}</h6>
                      </div>
                    )}) 
                    
                }
            </div>
        </>
    )
}
export default Headphones;