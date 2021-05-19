import React, {useState} from 'react';
import { Footer, Sidebar, Navbar } from "../../components";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([{
            "id": 1,
            "task": "Give dog a bath",
            "complete": "true"
        }, {
            "id": 2,
            "task": "Do laundry",
            "complete": "true"
        }, {
            "id": 3,
            "task": "Vacuum floor",
            "complete": "false"
        }, {
            "id": 4,
            "task": "Feed cat",
            "complete": "true"
        }, {
            "id": 5,
            "task": "Change light bulbs",
            "complete": "false"
        }, {
            "id": 6,
            "task": "Go to Store",
            "complete": "true"
        }, {
            "id": 7,
            "task": "Fill gas tank",
            "complete": "true"
        }, {
            "id": 8,
            "task": "Change linens",
            "complete": "false"
        }, {
            "id": 9,
            "task": "Rake leaves",
            "complete": "true"
        }, {
            "id": 10,
            "task": "Bake Cookies",
            "complete": "false"
        }, {
            "id": 11,
            "task": "Take nap",
            "complete": "true"
        }, {
            "id": 12,
            "task": "Read book",
            "complete": "true"
        }, {
            "id": 13,
            "task": "Exercise",
            "complete": "false"
        }, {
            "id": 14,
            "task": "Give dog a bath",
            "complete": "false"
        }, {
            "id": 15,
            "task": "Do laundry",
            "complete": "false"
        }, {
            "id": 16,
            "task": "Vacuum floor",
            "complete": "false"
        }, {
            "id": 17,
            "task": "Feed cat",
            "complete": "true"
        }, {
            "id": 18,
            "task": "Change light bulbs",
            "complete": "false"
        }, {
            "id": 19,
            "task": "Go to Store",
            "complete": "false"
        }, {
            "id": 20,
            "task": "Fill gas tank",
            "complete": "false"
        }]
    );
    const [todoInput, setTodoInput] = useState("");

    function handleTodoChange(todoInput) {
        if(todoInput){
            setTodoInput(todoInput)
        }else {
           return false;
        }
    }
    function handleTodoSubmit(e) {
        e.preventDefault();
        const confirmTodo = todos.find(todo => todo.task === todoInput);
        console.log("confirmTodo", !!confirmTodo);
        if(!confirmTodo && todoInput) {
            addTask(todoInput);
            setTodoInput("");
        }
    }

    function addTask(todoInput) {
        console.log("todoInput", todoInput)

            const todoCopy = {
                "id": todos.length + 1,
                "task": todoInput,
                "complete": "false"
            }
            const newTodo = [...todos, todoCopy];
            setTodos(newTodo);
    }

    function removeTask(id) {
        console.log('id', id);
        const newTodo = todos.filter(todo => todo.id !== id);
        setTodos(newTodo);
    }

    return (
        <>
            <Sidebar />
            <div className="main-wrapper mdc-drawer-app-content">
                <Navbar />
                <div className="page-wrapper mdc-toolbar-fixed-adjust">
                    <main className="content-wrapper">
                        <div className="mdc-layout-grid">
                            <div className="mdc-layout-grid__inner">
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                    <div className="mdc-card">
                                        <h4 className="card-title">Todo list</h4>
                                        <div className="add-items d-flex pt-4">
                                            <div className="mdc-text-field mdc-text-field--outlined">
                                                <input type="text" className="mdc-text-field__input todo-list-input"
                                                       id="text-field-hero-input" value={todoInput}  onChange={evt => handleTodoChange(evt.target.value)} />
                                                    <div className="mdc-notched-outline">
                                                        <div className="mdc-notched-outline__leading"></div>

                                                        <div className="mdc-notched-outline__trailing"></div>
                                                    </div>
                                            </div>
                                            <button
                                                className="add mdc-button mdc-button--raised filled-button--primary font-weight-bold todo-list-add-btn ml-3 height-auto"
                                                id="add-task" onClick={e => handleTodoSubmit(e)}>Add
                                            </button>
                                        </div>
                                        <div className="list-wrapper">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                {todos.map((todo, index) => {
                                                    todo.removeTask = removeTask
                                                    return (<Todo {...todo } key={index}  />)
                                                })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/*partial:../../partials/_footer.html*/}

                    <Footer />
                    {/*partial */}
                </div>
            </div>
        </>
    )
}

export default TodoList;
