import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContextProvider';
import { Footer } from '../Footer';
import { FilterData } from './FilterData';
import styles from './FruitsAndVegs.module.css'
import { Snacks } from './Snacks';


function SnacksData() {

    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const { lh, setLh } = useContext(CartContext);

    const getFruitsData = () => {
        setIsLoading(true);
        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/SnacksBrandedfoods")
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err);
                setIsError(true);
            }).finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        getFruitsData();
    }, [])



    return (
        <div className={styles.fruitsvegsDivCont}>
            <div className={styles.eachPagetitleImage}>
                <img src="https://www.jiomart.com/images/category/10/snacks-branded-foods-20200629.jpg" alt="Snacks" />
            </div>
            <FilterData />

            {
                <div className={styles.FruitsAndVegsDataCont}>
                    {
                        isLoading ? <div className={styles.loader}></div> :
                            isError ? <h3>Something went wrong...</h3> :
                                data.sort((a, b) => lh ? a.cost - b.cost : b.cost - a.cost)
                                    .map((item) => {
                                        return <Snacks item={item} key={item.id} />
                                    })
                    }
                </div>
            }
            <Footer />
        </div>
    )
}

export { SnacksData }