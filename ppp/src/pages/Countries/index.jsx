import React, {useState, useEffect} from 'react';
import "./style.scss"
import {API} from "../../api/Api"
import Card from "../../Component/Card"


const index = () => {
  const [data,  setData]=useState([]);
  const [loading, setLoading]=useState(false);
  useEffect(()=>{
    API.getAll().then((result)=>{
        setData(result.data);
        if(result.data){
            setLoading(true);
        }
    });
  },[]);
  if(!loading){
    return <h1>loading...</h1>
  }
    return (
        <>
            <div className="container mx-auto ">
                <div className="row p-3  justify-content-lg-between">
                    <div className="col-md-6 d- w-25 justify-content-end">
                        <input type="text" className="form-control" placeholder='Enter country name'/>
                    </div>
                    <div className="col-md-6 d-flex w-25 justify-content-start">
                       <select className='form-select'>
                        <option selected disabled>Filter by Region</option>
                        </select>
                    </div>
                    
                    <div className="col-12">
                        <h3 className="text-center">
                            All countries
                        </h3>
                        <div className="wrapper">
                           {data.length>0 ? data.map((el)=>{
                            return<Card data={el}/>
                           })
                           : <h2>Not found</h2>

                           }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;