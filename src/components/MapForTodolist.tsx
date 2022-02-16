import styles from "./Todolist.module.css";
/*import React from "react";
import {TaskType} from '../Todolist'*/
/*
type mapType = {
    tasks:Array<TaskType>
    removeTask:(taskId:string)=>void

}

export const MapForTodolist = (props:mapType)=> {
    <ul>
        {
            props.tasks.map(t => {
                const onClickHandler = () => props.removeTask(t.id)

                /!*const CheckBoxChangeStatusHandler = (value:boolean) => {props.CheckBoxChangeStatus(t.id,value)}*!/
                /!*                const onChangeHandlerForCheckBox = (e:ChangeEvent<HTMLInputElement>,value:boolean) => {props.CheckBoxChangeStatus(e.currentTarget.checked)
                                }*!/
                return <li key={t.id} className={t.isDone ? styles.isDone : ''}>
                    {/!*   <CheckBox isDone={t.isDone}
                                      CheckBoxChangeStatus={() => CheckBoxChangeStatusHandler(t.id, value)}/>*!/}
                    <input
                        type={'checkbox'}
                        checked={t.isDone}
                        onChange={(e) => onChangeHandlerForIsDone(t.id, e.currentTarget.checked)}
                        /!*
                                                    onChange={(e)=>props.CheckBoxChangeStatus(t.id,e.currentTarget.checked)}
                        *!/
                    />
                    <span>{t.title}</span>
                    <button onChange={onClickHandler}>x</button>
                </li>
            })
        }
    </ul>
}*/
