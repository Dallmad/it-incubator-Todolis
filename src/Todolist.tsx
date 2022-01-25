import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {CheckBox} from "./components/CheckBox";
import styles from './components/Todolist.module.css'
/*import {MapForTodolist} from "./components/MapForTodolist";*/


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    CheckBoxChangeStatus: (id: string, value: boolean) => void
    filter:FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState(false)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError(true)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");
    /* const onChangeHandlerForCheckBox = (tId: string, value: boolean) => {
         props.CheckBoxChangeStatus(tId, value)}*/
    const onChangeHandlerForIsDone = (tId:string,value:boolean) => {
        props.CheckBoxChangeStatus(tId,value)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? styles.error : ''}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {error && <div>Title is required</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id)

                    /*const CheckBoxChangeStatusHandler = (value:boolean) => {props.CheckBoxChangeStatus(t.id,value)}*/
                    /*                const onChangeHandlerForCheckBox = (e:ChangeEvent<HTMLInputElement>,value:boolean) => {props.CheckBoxChangeStatus(e.currentTarget.checked)
                                    }*/
                    return <li key={t.id} className={t.isDone ? styles.isDone : ''}>
                        {/*   <CheckBox isDone={t.isDone}
                                      CheckBoxChangeStatus={() => CheckBoxChangeStatusHandler(t.id, value)}/>*/}
                        <input
                            type={'checkbox'}
                            checked={t.isDone}
                            onChange={(e) => onChangeHandlerForIsDone(t.id, e.currentTarget.checked)}
                            /*
                                                        onChange={(e)=>props.CheckBoxChangeStatus(t.id,e.currentTarget.checked)}
                            */
                        />
                        <span>{t.title}</span>
                        <button onChange={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter==='all'?styles.activeFilter:''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter==='active'?styles.activeFilter:''} onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter==='completed'?styles.activeFilter:''} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}