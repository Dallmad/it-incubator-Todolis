import React, { useState} from 'react';
import './App.css';
import {TodoList} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm";
// C
// R
// U
// D
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType

}

type TaskStateType = {
    [todoListID: string]: Array<TaskType>
}

export type FilterValuesType = "all" | "active" | "completed"

const App = () => {
    // BLL:
    const todoListID_1 = v1()
    const todoListID_2 = v1()
    const todoListID_3 = v1()

    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to buy", filter: "all"},
        {id: todoListID_3, title: "What to read", filter: "all"},
    ])
    const [tasks, setTasks] = useState<TaskStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS/ES6", isDone: true},
            {id: v1(), title: "REACT", isDone: true},
        ],
        [todoListID_2]: [
            {id: v1(), title: "MILK", isDone: true},
            {id: v1(), title: "BREAD", isDone: false},
            {id: v1(), title: "MEAT", isDone: true},
        ],
        [todoListID_3]: [
            {id: v1(), title: "You dont now JS", isDone: true},
            {id: v1(), title: "Understanding Redux", isDone: false},
            {id: v1(), title: "How to learn React", isDone: false},
        ],
    })

    const removeTask = (taskID: string, todoListID: string) => {
        // const tasksFromTodoList = tasks[todoListID]
        // const filteredTasks = tasksFromTodoList.filter(t => t.id !== taskID)
        // const copyTasks = {...tasks}
        // copyTasks[todoListID] = filteredTasks
        // setTasks(copyTasks)

        setTasks({
            ...tasks,
            [todoListID]: tasks[todoListID].filter(t => t.id !== taskID)
        })
    }
    const addTask = (title: string, todoListID: string) => {
        const newTask: TaskType = {id: v1(), title, isDone: false}
        // const tasksFromTodoList = tasks[todoListID]
        // const upDatedTasks = [newTask, ...tasksFromTodoList]
        // const copyTasks = {...tasks}
        // copyTasks[todoListID] = upDatedTasks
        // setTasks(copyTasks)

        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})
    }
    const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {
        setTasks({
            ...tasks,
            [todoListID]: tasks[todoListID].map(t => t.id === taskID ? {
                ...t,
                title
            } : t)
        })
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        setTasks({
            ...tasks,
            [todoListID]: tasks[todoListID].map(t => t.id === taskID ? {
                ...t,
                isDone
            } : t)
        })
    }
    const getTasksForRender = (todoList: TodoListType) => {
        switch (todoList.filter) {
            case "active":
                return tasks[todoList.id].filter(t => !t.isDone)
            case "completed":
                return tasks[todoList.id].filter(t => t.isDone)
            default:
                return tasks[todoList.id]
        }
    }

    const changeTodolistFilter = (filter: FilterValuesType, todoListID: string) => {
        const upDatedTodoLists = todoLists.map(tl => tl.id === todoListID
            ? {...tl, filter: filter}
            : tl )
        setTodoLists(upDatedTodoLists)
    }
    const changeTodolistTitle = (title: string, todoListID: string) => {
        const upDatedTodoLists = todoLists.map(tl => tl.id === todoListID
            ? {...tl, title}
            : tl )
        setTodoLists(upDatedTodoLists)
    }
    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(tl => tl.id !== todoListID))
        delete tasks[todoListID]
    }
    const addTodolist = (title: string) => {
        const newTodolistID = v1()
        const newTodolist:TodoListType = {
            id: newTodolistID,
            title,
            filter: 'all'
        }
        setTodoLists([...todoLists,newTodolist])
        setTasks({...tasks, [newTodolistID]: []})
    }


    const todoListsComponents = todoLists.map(tl => {
        const tasksForRender = getTasksForRender(tl)
        return (
            <TodoList
                key={tl.id}
                id={tl.id}
                title={tl.title}
                tasks={tasksForRender}
                filter={tl.filter}
                removeTask={removeTask}
                changeFilter={changeTodolistFilter}
                addTask={addTask}
                removeTodoList={removeTodoList}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
                changeTodolistTitle={changeTodolistTitle}
            />
        )
    })

    // GUI:
    return (
        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {todoListsComponents}
        </div>
    );
}

export default App;
