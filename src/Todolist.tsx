import React from "react";
import {FilterValueType} from "./App";

type TodolistPropsType = {
    title?: string | number
    tasks: Array<TasksPropsType>
    removeTasks: (tasksID:number)=> void
    changeFilter:(value:FilterValueType)=>void
}
type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>

                {props.tasks.map(el => {
                        return (
                            <li key={el.id}>
                                <button onClick={()=>props.removeTasks(el.id)}>X</button>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                            </li>
                        )
                    }
                )
                }
                {/*<li><input type="checkbox" checked={props.tasks [0].isDone}/> <span>{props.tasks [0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks [1].isDone}/> <span> {props.tasks [1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks [2].isDone}/> <span>{props.tasks [2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={()=>props.changeFilter('All')}>All</button>
                <button onClick={()=>props.changeFilter('Active')}>Active</button>
                <button onClick={()=>props.changeFilter('Complete')}>Completed</button>
            </div>
        </div>
    )
}