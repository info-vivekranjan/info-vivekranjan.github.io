import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { CartContext } from '../../Context/CartContextProvider';
import styles from './Login.module.css';



function Login() {

    const initVal = {
        email: "",
        password: ""
    }


    const { isAuth, handleLogin } = useContext(CartContext);

    const [query, setQuery] = useState(initVal);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setQuery({
            ...query,
            [name]: value
        })
    }

    const { email, password } = query;

    const getLoginToken = ({ email, password }) => {
        const payload = {
            email,
            password
        }

        axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: payload
        })
            .then((res) => {
                console.log(res);
                handleLogin(res.data.token)
            }).catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getLoginToken(query);
    }

    return (
        <div className={styles.loginPageCont}>

            {
                !isAuth ?
                    <>
                        <br />
                        <div className={styles.formData}>

                            <div>
                                <img src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="SignIn Page" />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <h1 style={{ textAlign: "left" }}>Login</h1>
                                <p style={{ textAlign: "left", color: "gray" }}>Sign in to access your Orders, Offers and Wishlist.</p>
                                <input type="email" placeholder="Enter Your Email Id" name="email" onChange={handleChange} value={email} required />
                                <br />
                                <br />
                                <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={password} required />
                                <br />
                                <br />
                                <input type="submit" value="LOGIN" />
                                <br />
                                <br />

                            </form>

                        </div>
                    </>
                    :
                    <Redirect to="/" />
            }


        </div>
    );
}
export { Login }