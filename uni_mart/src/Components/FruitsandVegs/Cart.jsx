import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContextProvider';
import { CartRow } from './CartRow';
import styles from './Cart.module.css';
import cx from 'classnames';

import { useHistory } from 'react-router-dom';




function Cart() {

    const { cart, isAuth, setIsAuth, setCart, setItemCount } = useContext(CartContext);

    console.log(cart);

    const total_saving = (cart.reduce((a, c) => a + (c.count * c.cost * c.offer) / 100, 0))

    const total_cost = (cart.reduce((a, c) => a + (c.count * c.cost), 0))

    const subTotal = total_cost - total_saving

    const history = useHistory()


    const payment = () => {

        setCart([])
        history.push("/payment")

    }

    return (
        <div style={{ backgroundColor: "#F6F6F7", minHeight: "100vh" }}>
            <h1 style={{ marginTop: "70px", textAlign: "left", marginLeft: "100px" }}>My Cart ({cart.length})</h1>
            {
                isAuth ?

                    <div style={{ marginTop: "70px" }} className={styles.wholeCartCont}>

                        <div className={styles.cartCont}>


                            <div className={styles.topCartTable}>
                                <div><b>Groceries Basket</b> ({cart.length} item)</div>
                                <div><b>₹ {subTotal}</b></div>
                            </div>
                            {
                                cart.map((item) => {
                                    return <CartRow item={item} key={item.id} />

                                })
                            }


                        </div>
                        <div className={styles.subTotalCont}>

                            <div>Payment Details</div>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0px" }}>
                                <div>MRP Total</div>
                                <div><b>₹{total_cost}</b></div>
                            </div>


                            <div style={{ width: "100%", margin: "15px auto", borderBottom: "1px solid silver" }} ></div>


                            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0px" }}>
                                <div>Product Discount</div>
                                <div><b>- ₹{total_saving}</b></div>
                            </div>


                            <div style={{ width: "100%", margin: "15px auto", borderBottom: "1px solid silver" }} ></div>


                            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0px" }}>
                                <div><b>Total Amount</b></div>
                                <div><b>₹{subTotal}</b></div>
                            </div>

                            <div style={{ margin: "10px 0px", color: "rgb(67, 192, 17)", textAlign: "right", fontSize: "14px" }}>
                                <b>You Save ₹{total_saving}</b>
                            </div>

                            <br />
                            <br />
                            <br />

                            <div className={styles.paymentCont}>
                                <button className={styles.paymentBtn} onClick={payment}>Proceed to payment</button>

                            </div>

                        </div>
                    </div>
                    :
                    <div style={{ marginTop: "120px" }}>
                        <img style={{ width: "20%" }} src="https://www.jiomart.com/msassets/images/emptycart.svg" alt="Enpty Cart" />
                        <h3>Your Cart is empty!</h3>
                        <span>You have no items added in the cart.</span>
                    </div>

            }
        </div>
    )
}
export { Cart }