import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {findAllByText} from "@testing-library/react";

export type FilterValueType = 'Active'| 'Complete' | 'All'
function App() {
    /*    let tasks1 = [
            {id: 1, title: "HTML@CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "Hello Word", isDone: true},
            {id: 5, title: "I am Happy", isDone: true},
            {id: 6, title: "Yo", isDone: false}
        ]*/

    let [tasks1, Settasks1] = useState([
        {id: 1, title: "HTML@CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Hello Word", isDone: true},
        {id: 5, title: "I am Happy", isDone: true},
        {id: 6, title: "Yo", isDone: false}
    ])
    const removeTasks = (tasksID: number) => {
        tasks1 = tasks1.filter((ts) => ts.id !== tasksID)
        Settasks1(tasks1)
        console.log(tasks1)
    }

    const [filterValue, setFilterValue] = useState('All')
    let filtertasks = tasks1
    if (filterValue == 'Active') {
        filtertasks = tasks1.filter((ts) => ts.isDone == false)
    }
    if (filterValue == 'Complete') {
        filtertasks = tasks1.filter((ts) => ts.isDone == true)
    }

    const changeFilter = (value:FilterValueType) => {
        console.log(value)
        setFilterValue (value)
    }

    return (
        <div className="App">
            < Todolist title={'What to learn 1'}
                       tasks={filtertasks}
                       removeTasks={removeTasks}
                       changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
