import React from "react";
import { useState } from "react";

import styles from './styles.module.css'

function ToDoForm({ setToDoList }) {

    const [inputValue, setInputValue] = useState('');

    const inputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onClick = () => {
        if (inputValue.trim()){
            setToDoList((pre) => [...pre, inputValue]);
            setInputValue('');
        }   
    }

    return (
        <div className={styles.listHead}>
            <input onChange={inputChange}
                value={inputValue}
                type="text"
                className="entered-list"
                placeholder="Enter a task..."
            />
            <button onClick={onClick}
                type="submit"
                className="add-list"> Add
            </button>
        </div>

    )
}

export default ToDoForm;