import React, { useContext } from 'react';
import styles from './payment.module.css';


function Payment() {


    return (

        <div className={styles.paymentCont}>
            <img style={{ width: "50%" }} src="https://www.jiomart.com/msassets/images/emptycart.svg" alt="Enpty Cart" />

            <h1>You Have Ordered Successfully</h1>
            <h1>Thanks for choosing Us</h1>

        </div>
    )
}
export { Payment }