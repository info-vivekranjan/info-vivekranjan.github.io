import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../Context/CartContextProvider';
import styles from './FruitsAndVegs.module.css'


function FruitsAndVegs({ item }) {



    const { cart, handleCart, itemCount, increaseCount, decreaseCount, setIsAuth, isAuth } = useContext(CartContext);

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
                ...item,
                count: itemCount[id] || 1
            }
            handleCart(payload);
            setIsAuth(true);
        }
        else {
            history.push("/login");
        }
    }



    return (




        <div className={styles.singleFruits}>

            <div className={styles.offeronEachProd}>{item.offer} %<br /> OFF</div>


            <div style={{ display: "flex", justifyContent: "flex-end" }}>

                {
                    item.foodtype === "veg" &&
                    <i style={{ color: "#009A30", fontSize: "23px" }} class="ri-radio-button-line"></i>
                }

                {
                    item.foodtype === "non-veg" &&
                    <i style={{ color: "red", fontSize: "23px" }} class="ri-radio-button-line"></i>
                }

            </div>

            <div className={styles.linkandCostCont}>

                <Link to={`/fruitsandvegs/${item.id}`} className={styles.fruitsvegsLink}>
                    <div className={styles.fruitsvegsImg}>
                        <img src={item.image} alt="imagePic" />
                    </div>
                    <div className={styles.fruitsvegsName}>{item.name}</div>
                </Link>


                <div style={{ textDecoration: "line-through" }}>M.R.P:    <b>₹ {item.cost}.00</b></div>
                <div>New Price :<b>₹ {item.cost - ((item.offer * item.cost) / 100)}</b></div>
            </div>

            <button className={styles.count} className={styles.count} disabled={itemCount[item.id] === 1 || itemCount[item.id] === undefined} onClick={() => handleDecrement(item.id)}>-</button>

            <span>{itemCount[item.id] || 1}</span>

            <button className={styles.count} className={styles.count} onClick={() => handleIncrement(item.id)}>+</button>

            <button disabled={item.instock === false} onClick={() => addToCart(item.id)} className={styles.addtoCart}>Add to Cart</button>


        </div>







    );
}
export { FruitsAndVegs }