import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import styles from './Resources.module.css'

function ResourcesPage() {


    const [data,setData] = useState([]);
    const {theme} = useContext(ThemeContext);
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError]  = useState(false)


    const getCovidResources = ()=>{
        setIsLoading(true);
    axios.get("https://json-server-mocker-sm2-196.herokuapp.com/covidResources")
    .then((res)=>{
        console.log(res);
        setData(res.data)
    }).catch((err)=>{
        console.log(err);
        setIsError(true)
    }).finally(()=>{
        setIsLoading(false)
    })
}

useEffect(()=>{
    getCovidResources();
},[]);


    return (
        <div>
            <h1 style={{marginTop:"0",color:theme.textColor}} >Resources</h1>
            <div>
                <div className={styles.resourcePara} style={{backgroundColor:theme.resourcesBG}}>
                    The objective of this page is to help people gain access to vital resources by sharing information only. However, we request the beneficiaries to use their discretion and verify the leads on their own before taking any action. If you find inaccurate information or any lead engaging in illegal practices, kindly inform us at infovivek.ranjan@gmail.com. We will take it down as soon as possible. We will not be responsible for the actions you take using the information on this page. We are just mediating information and are no way responsible for what is being shared. Please avoid sharing and contacting black market resources. We strongly encourage to AVOID black market.
                    
                </div>

        {
            isLoading?<div className={styles.loader}></div>:
                isError?<h3 style={{color:"#FF073A"}}>Something went wrong...</h3>:
                <div className={styles.allResourceLinksCont}>
                            {
                                data.map((item)=>{
                                    return <div key = {item.id} className={styles.resourcesCont} style={{backgroundColor:theme.resourcesBG}}>
                                
                                    <a href={item.link} target="_noblank" className={styles.resource}>
                                        <div className={styles.aTagBody} style={{color:theme.textColor}}>{item.title}</div>
                                        <div className={styles.resourceLink}>
                                            <span>{item.link}</span>
                                        </div>
                                    </a>
                                </div>
                                })
                            }
                </div>
            
        }


            
                
            </div>
        </div>
    );
}
export { ResourcesPage }