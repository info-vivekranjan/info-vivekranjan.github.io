import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';
import styles from './Navbar.module.css';

const links = [
    {
        to: "/",
        title: <h1 style={{ margin: 0, backgroundColor: "#00a4eb", padding: "5px", borderRadius: "4px" }}>UniMart</h1>
    },
    {
        to: "/fruitsandvegs",
        title: "Fruits and Vegetables"
    },
    {
        to: "/dairyandbakery",
        title: "Dairy and Bakery"
    },
    {
        to: "/snacks",
        title: "Snacks"
    },
    {
        to: "/staples",
        title: "Staples"
    }
    ,
    {
        to: "/aboutus",
        title: "About Us"
    },
    {
        to: "/contactus",
    },
    {
        to: "/login",
        title: "Login"
    },
    {
        to: "/cart",
        logo: <i class="ri-shopping-cart-line"></i>
    }
]

function Navbar() {

    const { cart } = useContext(CartContext);

    return (
        <div className={styles.navBar}>
            <div className={styles.navBarCart}>
                {
                    links.map((item) => {
                        return <div className={styles.navLinkCont}>
                            <div>
                                <Link className={styles.navLink} to={item.to}>
                                    {item.title}
                                </Link>
                            </div>

                            <div>
                                <Link className={styles.cartLogo} to={item.to}>{item.logo}</Link>
                            </div>
                        </div>
                    })

                }
            </div>
            <div className={styles.cartCount}>
                {cart.length}
            </div>


        </div >
    );
}
export { Navbar }