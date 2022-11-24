import React from "react";
import { useState } from "react";

import { MdOutlineDoneOutline } from 'react-icons/md'
import { ImCross } from 'react-icons/im'


import styles from './styles.module.css'


function Tasks({ value, setToDoList, index }) {

    const [isCompleted, setISCompleted] = useState(false)

    const complete = () => {
        setISCompleted((pre) => !pre)
    }

    const remove = () => {
        setToDoList((pre) => pre.filter((_, id) => id !== index))
    }

    return (
        <div className={styles.tasks}>
            <div className={styles.btns}>
            <p className={isCompleted?styles.completed : styles.task}>{value}</p>
                <i className={value? styles.visible : styles.invisible} onClick={() => complete()} type="button"><MdOutlineDoneOutline /></i>
                <i className={value? styles.visible : styles.invisible} onClick={() => remove()} type="button"><ImCross /></i>
            </div>
        </div>

    )
}

export default Tasks;