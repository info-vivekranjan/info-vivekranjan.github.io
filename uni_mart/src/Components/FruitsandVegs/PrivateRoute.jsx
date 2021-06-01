import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { CartContext } from "../../Context/CartContextProvider";

function PrivateRoute({ path, children, exact = true, push = false }) {

    const { isAuth } = useContext(CartContext);

    return (
        <div>
            {
                isAuth ?
                    <Route path={path} exact={exact}>
                        {children}
                    </Route>
                    :
                    <Redirect push={push} to="/login" />
            }

        </div>
    );

}
export { PrivateRoute }