import React, { useState } from 'react';
import styles from './Todo.module.css';
import { v4 as uuid } from "uuid";

import trash from './trash-alt-regular.svg';
import complete from './check-circle-solid.svg';
import incomplete from './check-circle-solid 2.svg';


function Todo() {

    const [query, setQuery] = useState("");
    const [todo, setTodo] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false)



    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value)
    }

    const handleAdd = () => {
        const payload = {
            title: query,
            status: false,
            fav: false,
            id: todo.length + 1
        }
        const updatedvalue = [...todo, payload]
        setTodo(updatedvalue)
    }


    const handleToggle = (id) => {
        const updatedValue = todo.map((item) => {
            return item.id === id ? { ...item, status: !item.status } : item
        })
        setTodo(updatedValue)
    }


    const handleRemove = (id) => {
        const updatedValue = todo.filter((item) => {
            return item.id !== id
        })
        setTodo(updatedValue)
    }


    return (
        <div className={styles.wholeTodo}>
            <h1>TODO LIST</h1>
            <input value={query}
                onChange={handleChange}
                placeholder="Enter Something..."
                type="text"
                className={styles.todoInput}

            />
            <button className={styles.addButton} onClick={handleAdd}>Add</button>

            <div>
                <h3 className={styles.h31}>INCOMPLETE TASK</h3>

                {
                    todo.filter((item) => !item.status).map((item) => {
                        return <div key={item.id} className={styles.todoList}>

                            <h4>{item.title} </h4>
                            <img src={incomplete} alt="incomplete" onClick={() => handleToggle(item.id)} className={styles.incompleteTodo} />

                            <img src={trash} alt="remove" onClick={() => handleRemove(item.id)} className={styles.removeLogo} />

                        </div>
                    })
                }
            </div>

            <button className={styles.showHide} onClick={() => setShowCompleted(!showCompleted)}>{showCompleted ? "Hide" : "Show"} Completed Task</button>
            <div>
                {
                    showCompleted &&
                    <>
                        <h3 className={styles.h32}>COMPLETE TASK</h3>

                        {
                            todo.filter((item) => item.status).map((item) => {
                                return <div key={item.id} className={styles.todoList}>

                                    <h4 style={{ textDecoration: item.status && "line-through", textDecorationThickness: "2px" }}>{item.title}</h4>
                                    <img src={complete} alt="incomplete" onClick={() => handleToggle(item.id)} className={styles.completeTodo} />


                                    <img src={trash} alt="remove" onClick={() => handleRemove(item.id)} className={styles.removeLogo} />

                                </div>
                            })
                        }
                    </>
                }
            </div>

        </div>
    )

}
export { Todo }