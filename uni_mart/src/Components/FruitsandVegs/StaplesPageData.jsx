import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './FruitsAndVegs.module.css'
import { StaplesPage } from './StaplesPage';



function StaplesPageData() {

    const [data, setData] = useState("");
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getFruitsData = () => {
        setIsLoading(true);
        axios.get(`https://json-server-mocker-sm2-196.herokuapp.com/staples/${id}`)
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err);
                setIsError(true);
            }).finally(() => {
                setIsLoading(false);
            })
    }
    useEffect(() => {
        getFruitsData();
    }, [])


    return (
        <div>
            {
                isLoading ? <div className={styles.loader}></div> :
                    isError ? <h3>Something went wrong...</h3> :
                        <StaplesPage data={data} />
            }

        </div>
    )
}
export { StaplesPageData }