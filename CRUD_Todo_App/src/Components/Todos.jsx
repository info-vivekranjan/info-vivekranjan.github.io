import React from 'react';
import { Box, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../Redux/todo/action';
import { TodoList } from './TodoList';


const useStyle = makeStyles((theme) => ({

    root: {
        boxShadow: "1px 1px 8px 6px rgb(176, 255, 196)",
        borderRadius: "5px",
        width: "40%",
        margin: "auto",
        height: "85vh",
        overflow: "auto",
        backgroundColor: "white",

    },
    todoInput: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",

    },
    addBtn: {
        fontSize: "30px",
        borderRadius: "50%"
    }


}))


function Todos() {

    const classes = useStyle()
    const [query, setQuery] = useState("");

    const dispatch = useDispatch()
    const todoData = useSelector(state => state.todos.todo)



    const handleAdd = () => {
        const payload = {
            id: uuid(),
            title: query,
            status: false
        }
        dispatch(addTodo(payload))
        setQuery("");
    }




    const handleToggle = (id) => {
        const updatedData = todoData.map((item) => {
            return item.id === id ? { ...item, status: !item.status } : item;
        })

        dispatch(toggleTodo(updatedData))
    }



    return (
        <div className={classes.root}>
            <Box color="rgb(47, 230, 123)">
                <h1>To Do List</h1>
            </Box>
            <Box className={classes.todoInput}>
                <Box>
                    <TextField
                        variant="standard"
                        label="Enter Task..."
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                </Box>
                <Box marginLeft="15px">
                    <Button
                        onClick={handleAdd}
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.addBtn}
                    >
                        +
                    </Button>
                </Box>
            </Box>


            <>
                {
                    todoData.map((item) => {
                        return <div key={item.id}>
                            <TodoList
                                {...item}
                                handleToggle={handleToggle}
                            />
                        </div>
                    })
                }


            </>


        </div>
    )
}

export { Todos }