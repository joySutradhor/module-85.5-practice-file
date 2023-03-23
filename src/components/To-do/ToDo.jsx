import "./Todo.css"
import { useEffect, useState } from 'react';

const ToDo = () => {
const [lists, setLists] = useState([]);
useEffect ( ()=> {
    fetch ("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then (data => setLists(data))
} , [])
    return (
        <div className="todoList">
            {
                lists.map(list => <ToDoUi list={list}></ToDoUi>)
            }
        </div>
    );
};

function ToDoUi (props) {
    console.log(props.list)
    const {id , title, completed} = props.list;
    return (
        <div className="todoContainer">
            <div className="todo">
                <h2>ID : {id}</h2>
                <h4>Title : {title}</h4>
                <h5>Completed : {completed ? "True" : "False"}</h5>
            </div>
        </div>
    )
}

export default ToDo;