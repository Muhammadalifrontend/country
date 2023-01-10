import React,{useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {API} from "../api/Api";
import "./style.scss"

const index = () => {
    const [data, setData]=useState([]);

    const {names}=useParams();
    const goback=useNavigate();
  
    useEffect(()=>{
        API.getItem(names).then((res)=>setData(res.data[0]))
    },[names]);
    console.log(data.data);
   
const { flag, region, population, capital, name}= data; 


    return (
        <div className='container card shadow align-items-center p-5 m-5'>
          
            <button className="exit" onClick={()=>{goback(-1)}}>Exit</button>
            <div className="wrapperr">
               <div className="left">
                <img className='images' src={flag} alt="flag" />
               </div>
               <div className="rigth">
                <h2>{name}</h2>
                <ul>
                            <li>Population:<strong>{population}</strong></li>
                            <li>Region:<strong>{region}</strong></li>
                            <li>Capital:<strong>{capital}</strong></li>
                </ul>
               </div>
            </div>
            
        </div>
    );
};

export default index;