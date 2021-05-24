import React, {useState, useEffect} from 'react';
import { Footer, Sidebar, Navbar } from "../../components";
import Todo from "./Todo";

const TodoList = () => {


    var gapi = window.gapi=window.gapi;
    var CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    var API_KEY = process.env.REACT_APP_API_KEY;
    var DISCOVERY_DOCS = [process.env.REACT_APP_DISCOVERY_DOCS];
    var SCOPES = process.env.REACT_APP_SCOPES;


    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('myTodos')));
    const [todoInput, setTodoInput] = useState("");
    // if(!todos) setTodos(JSON.stringify(localStorage.setItem('myTodos', [])))

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
        const todoCopy = {
            "id": todos.length + 1,
            "task": todoInput,
            "complete": "false"
        }

        const newTodo = [...todos, todoCopy];
        localStorage.setItem('myTodos', JSON.stringify(newTodo));
        setTodos(JSON.parse(localStorage.getItem('myTodos')));

        gapi.load('client: auth2', () => {
            console.log('load client');

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                // clientSecret: CLIENT_SECRET,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('ban!'));

            gapi.auth2.getAuthInstance().signIn()
                .then((result) => {
                    console.log('result', result)
                    var event = {
                        'summary': 'Google I/O 2015',
                        'location': '800 Howard St., San Francisco, CA 94103',
                        'description': 'A chance to hear more about Google\'s developer products.',
                        'start': {
                            'dateTime': '2015-05-28T09:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                            'dateTime': '2015-05-28T17:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'recurrence': [
                            'RRULE:FREQ=DAILY;COUNT=2'
                        ],
                        'attendees': [
                            {'email': 'lpage@example.com'},
                            {'email': 'sbrin@example.com'}
                        ],
                        'reminders': {
                            'useDefault': true,
                            'overrides': [
                                {'method': 'email', 'minutes': 24 * 60},
                                {'method': 'popup', 'minutes': 10}
                            ]
                        }
                    };
                    var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event
                    });

                    request.execute(event => {
                        window.open('Event created: ' + event.htmlLink);
                    });
                })
        })
    }

    function removeTask(id) {
        console.log('id', id);
        const newTodo = todos.filter(todo => todo.id !== id);
        localStorage.setItem('myTodos', JSON.stringify(newTodo));
        setTodos(JSON.parse(localStorage.getItem('myTodos')));
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
                                                    <div className="mdc-notched-outline" style={{border:'1px solid #efefef'}}>
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
                                                    <thead className="bg-light">
                                                        <tr>
                                                            <th></th>
                                                            <th>Todos</th>
                                                            <th>Todo Status</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {todos > 0 ? todos.map((todo, index) => {
                                                            todo.removeTask = removeTask
                                                            return (<Todo {...todo } key={index}  />)
                                                        }): ""}
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
