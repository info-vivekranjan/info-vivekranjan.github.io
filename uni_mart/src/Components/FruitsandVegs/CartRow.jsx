import React, { useContext } from 'react';
import styles from './Cart.module.css';
import cx from 'classnames';
import { CartContext } from '../../Context/CartContextProvider';

function CartRow({ item }) {

    const { cart, setCart } = useContext(CartContext);

    const deleteItem = (id) => {
        const updatedVal = cart.filter((item) => {
            return item.id !== id
        })
        setCart(updatedVal);
    }

    return (
        <>
            <div className={styles.cartHeader}>
                <div className={styles.cartImg}>
                    <img style={{ maxWidth: "70%" }} src={item.image} alt="dataImg" />
                </div>

                <div className={styles.cartTextCont}>
                    <div className={styles.cartTitle}>

                        <div>{item.name}</div>
                    </div>

                    <div className={styles.cartCostCont}>
                        <div>Qty : {item.count}</div>


                        {/* <div>₹ {item.cost - ((item.offer * item.cost) / 100)}</div> */}


                        <div><b>₹ {(item.cost - ((item.offer * item.cost) / 100)) * item.count}</b></div>

                        <div>₹ {item.count * item.cost}</div>

                        <div>Yout Save :  ₹ {item.count * item.offer * item.cost / 100}</div>
                        <button className={styles.deleteBtn} onClick={() => deleteItem(item.id)}>delete</button>
                    </div>

                </div>

            </div>


            <div style={{ width: "80%", margin: "15px auto", borderBottom: "1px solid silver" }} ></div>


        </>
    )
}
export { CartRow }