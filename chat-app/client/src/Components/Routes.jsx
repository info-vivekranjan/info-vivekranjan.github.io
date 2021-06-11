import { Route, Switch } from "react-router";
import { Chat } from "./Chat/Chat";
import { Join } from "./Join/Join";

function Routes() {
    return (
        <>

            <Switch>
                <Route path="/" exact>
                    <Join />
                </Route>
                <Route path="/chat">
                    <Chat />
                </Route>
                <Route>
                    <h3>404 | Page Not Found</h3>
                </Route>
            </Switch>

        </>
    )
}
export { Routes }