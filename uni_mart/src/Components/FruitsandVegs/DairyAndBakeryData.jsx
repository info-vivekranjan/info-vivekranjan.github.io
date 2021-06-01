import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContextProvider';
import { Footer } from '../Footer';
import { DairyAndBakery } from './DairyAndBakery';
import { FilterData } from './FilterData';

import styles from './FruitsAndVegs.module.css'



function DairyAndBakeryData() {

    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const { lh, setLh } = useContext(CartContext);

    const getFruitsData = () => {
        setIsLoading(true);
        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/DairyandBakery")
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
        <div className={styles.fruitsvegsDivCont}>

            <div className={styles.eachPagetitleImage}>
                <img src="https://www.jiomart.com/images/category/61/dairy-bakery-20200619.jpg" alt="DairyandBakery" />
            </div>
            <FilterData />
            {
                isLoading ? <div className={styles.loader}></div> :
                    isError ? <h3>Something went wrong...</h3> :
                        <div className={styles.FruitsAndVegsDataCont}>
                            {
                                data.sort((a, b) => lh ? a.cost - b.cost : b.cost - a.cost)
                                    .map((item) => {
                                        return <DairyAndBakery item={item} key={item.id} />
                                    })
                            }
                        </div>
            }

            <Footer />
        </div>
    );


}

export { DairyAndBakeryData }
