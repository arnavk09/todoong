import React, { useState } from "react";
import styles from './AddTodo.module.css'
const AddToDo=({addToDo})=>{

    const [text,setText]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim()){
            addToDo(text);
            setText("")
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Add task"
            />
            <button type="submit" className={styles.button}>
                Add Task
            </button>
        </form>
        </>
    )

}
export default AddToDo;