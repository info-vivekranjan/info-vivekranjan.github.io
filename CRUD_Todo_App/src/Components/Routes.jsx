import { Route, Switch } from "react-router-dom";
import { TodoDetails } from "./TodoDetails";
import { Todos } from "./Todos";

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Todos />
                </Route>

                <Route path="/edit/:id" exact>
                    <TodoDetails />
                </Route>

                <Route>
                    <h3>404 | Page Not Found</h3>
                </Route>
            </Switch>
        </div>
    )
}

export { Routes }