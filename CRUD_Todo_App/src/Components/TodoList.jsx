import { Box, Button, makeStyles, Checkbox } from "@material-ui/core";
import { useState } from "react";

import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    root: {
        // border: "2px solid orange",
        width: "70%",
        margin: "10px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        backgroundColor: "rgb(47, 230, 123)",
    },
    title: {
        width: "70%",
        textAlign: "left",
        marginLeft: "10%",
        color: "white",
        fontWeight: "600",
    },
    titleCompleted: {

        width: "70%",
        textAlign: "left",
        marginLeft: "10%",
        textDecoration: "line-through",
        color: "red",
        fontWeight: "600",
    }


}))



function TodoList({ id, title, status, handleToggle }) {

    const classes = useStyle()


    return (
        <>

            {

                <div className={classes.root}>
                    <Checkbox
                        checked={status}
                        onChange={() => handleToggle(id)}

                    />

                    <h5>{status ? "Done" : "Pending"}</h5>


                    {
                        !status &&
                        <Link className={classes.title}

                            to={`/edit/${id}`}
                        >
                            {title}
                        </Link>

                    }

                    {
                        status &&
                        <Link className={classes.titleCompleted}

                            to={`/edit/${id}`}
                        >
                            {title}
                        </Link>

                    }



                </div>


            }



        </>
    )
}

export { TodoList }