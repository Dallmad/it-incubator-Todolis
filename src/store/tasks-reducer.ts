import {TaskStateType, TodoListType} from '../App';
import {v1} from 'uuid';
import {AddTodoListAT, RemoveTodoListAT} from './todolists-reducer';


export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK'
    title:string
    todoListID:string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskID: string
    isDone: boolean
    todoListID: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskID: string
    title: string
    todoListID: string
}

type ActionType = RemoveTaskActionType | AddTaskActionType
| ChangeTaskStatusActionType | ChangeTaskTitleActionType
| RemoveTodoListAT | AddTodoListAT


export const tasksReducer = (state: TaskStateType,
                             action: ActionType): TaskStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state,
                [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case 'ADD-TASK':
            const newTask = {id:v1(),title:action.title, isDone: false}
            return {...state, [action.todoListID]: [newTask, ...state[action.todoListID]]}
        case 'CHANGE-TASK-STATUS':
            return {
                ...state,
                [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ? {...t, isDone:action.isDone} : t)
            }
        case 'CHANGE-TASK-TITLE':
            return {
                ...state,
                [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ? {...t, title:action.title} : t)
            }
        case 'ADD-TODOLIST':
            return {
                ...state,[action.todolistID]:[]
    }
        case 'REMOVE-TODOLIST':
            // let {[action.id]:[],...part} = {...state}   можно так удалять
            // return part                                 через деструктуризацию
            let newState = {...state}
            delete newState[action.id]
            return newState
        default:
            throw new Error('Blabla')
    }
}

export const removeTaskAC = (taskId: string,todolistId: string): RemoveTaskActionType => {
    return {
        type: 'REMOVE-TASK',taskId,todolistId
    }
}
export const addTaskAC = (title: string, todoListID: string): AddTaskActionType => {
    return {
        type: 'ADD-TASK',title,todoListID
    }
}
export const changeTaskStatusAC = (taskID: string, isDone: boolean, todoListID: string): ChangeTaskStatusActionType => {
    return {
        type: 'CHANGE-TASK-STATUS',taskID,todoListID,isDone
    }
}
export const changeTaskTitleAC = (taskID: string, title: string, todoListID: string): ChangeTaskTitleActionType => {
    return {
        type: 'CHANGE-TASK-TITLE',taskID,todoListID,title
    }
}

