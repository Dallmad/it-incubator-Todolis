import React from "react";

type inArray= {
    id: number
    title: string
    isDone: boolean
}
type PropsType={
    ogurcy?:string
    pom?:string
    arr:Array<inArray>


}


export const Todolist=(props: PropsType)=> {
    return (
        <div>
            <h3>{props.pom}</h3>
            <h3>{props.ogurcy}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.arr.map(m=>{
                    return(
                        <li><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>
                    )
                })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
