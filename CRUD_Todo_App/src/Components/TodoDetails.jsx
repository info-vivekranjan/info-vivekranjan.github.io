import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { deleteTodo, editTodo } from '../Redux/todo/action';


const useStyle = makeStyles((item) => ({
    editRoot: {
        boxShadow: "1px 1px 8px 6px rgb(176, 255, 196)",
        borderRadius: "5px",
        width: "40%",
        margin: "auto",
        height: "85vh",
        overflow: "auto",
        backgroundColor: "white",
    },
    itemDetails: {
        width: "70%",
        margin: "10px auto",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: "4px",
        backgroundColor: "rgb(47, 230, 123)",
    },
    editItem: {

        width: "80%",
        margin: "10px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "4px",
    }
}))

function TodoDetails() {

    const { id } = useParams()

    const todoData = useSelector(state => state.todos.todo)

    const item = todoData.find((item) => item.id === id)

    const classes = useStyle();


    const [text, setText] = useState(item.title || "");


    const history = useHistory();
    const dispatch = useDispatch();

    const editNewTodo = () => {
        const payload = {
            id: item.id,
            title: text,
            status: false
        }

        dispatch(editTodo(payload))

        history.push("/");
    }


    const handleDelete = (id) => {

        const updatedData = todoData.filter((item) => item.id !== id)
        dispatch(deleteTodo(updatedData))

        history.push("/");
    }

    return (
        <div className={classes.editRoot}>

            <h1>Task Deltails</h1>

            <Box className={classes.itemDetails}>
                <h4>{item.title}</h4>
                <p>{item.status ? "DONE" : "PENDING"}</p>
            </Box>

            <h1>EDIT</h1>

            <Box className={classes.editItem}>
                <Box>
                    <TextField
                        variant="outlined"
                        onChange={(e) => setText((e).target.value)}
                        value={text} />
                </Box>

                <Box>
                    <Button
                        startIcon={<EditIcon />}
                        color="primary"
                        variant="contained"
                        size="large"
                        onClick={editNewTodo}
                    >

                    </Button>
                </Box>



                <Box>
                    <Button
                        startIcon={<DeleteIcon />}
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={() => handleDelete(item.id)}
                    >

                    </Button>
                </Box>
            </Box>

        </div>
    )
}

export { TodoDetails }