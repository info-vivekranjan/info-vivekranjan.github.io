import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContextProvider';
import styles from './FruitsAndVegs.module.css'


function FruitsAndVegsPage({ data }) {

    const { cart, handleCart, increaseCount, decreaseCount, itemCount, setIsAuth, isAuth } = useContext(CartContext);

    const history = useHistory();

    const handleIncrement = (id) => {
        increaseCount(id);
    }

    const handleDecrement = (id) => {
        decreaseCount(id);
    }


    const addToCart = (id) => {

        if (isAuth === true) {
            const payload = {
                ...data,
                count: itemCount[id] || 1
            }
            handleCart(payload)
            setIsAuth(true);
        }
        else {
            history.push("/login");
        }
    }


    return (
        <div className={styles.fruitsvegsPage}>
            {
                data.category === "fruits" &&
                <h1>Fruit</h1>
            }
            {
                data.category === "vegetables" &&
                <h1>Vegetable</h1>
            }

            {

                <div className={styles.fruitsvegsPageCont}>
                    <div className={styles.fruitsvegsPageLeft}>
                        <div>
                            <img src={data.image} alt="fruitsvegsImg" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>

                            {
                                data.foodtype === "veg" &&
                                <i style={{ color: "#009A30", fontSize: "23px" }} class="ri-radio-button-line"></i>
                            }

                            {
                                data.foodtype === "non-veg" &&
                                <i style={{ color: "red", fontSize: "23px" }} class="ri-radio-button-line"></i>
                            }

                        </div>
                    </div>
                    <div className={styles.fruitsvegsPageRight}>

                        <div className={styles.fruitsvegsPageName}>{data.name}</div>
                        <div className={styles.fruitsvegsPageCost}>M.R.P :   ₹ {data.cost}</div>
                        <div style={{ margin: "15px" }}>New Price :<b>₹ {data.cost - ((data.offer * data.cost) / 100)}</b></div>
                        <div style={{ margin: "15px" }}>You Save :<b style={{ color: "#009A30" }}>₹ {((data.offer * data.cost) / 100)}</b></div>


                        {
                            data.instock &&
                            <div style={{ color: "#009A30", fontSize: "17px", fontWeight: "500", margin: "15px" }}>{data.instock ? "IN STOCK" : "NOT IN STOCK"}</div>
                        }
                        {
                            !data.instock &&
                            <div style={{ color: "red", fontSize: "14px", fontWeight: "600", margin: "15px" }}>{data.instock ? "IN STOCK" : "NOT IN STOCK"}</div>
                        }
                        <div style={{ margin: "15px" }}>
                            Features : {data.features}
                        </div>


                        <button className={styles.count} disabled={itemCount[data.id] === 1 || itemCount[data.id] === undefined} onClick={() => handleDecrement(data.id)}>-</button>
                        <sapn>{itemCount[data.id] || 1}</sapn>
                        <button className={styles.count} onClick={() => handleIncrement(data.id)}>+</button>

                        <button disabled={data.instock === false} onClick={() => addToCart(data.id)} className={styles.addtoCart}>Add to Cart</button>
                        <hr />
                        <div className={styles.description}>
                            Description: {data.description}
                        </div>
                    </div>



                </div>
            }


        </div>
    );
}
export { FruitsAndVegsPage }