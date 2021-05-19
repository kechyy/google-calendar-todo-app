import React from 'react';

const Todo = (eachTodo) => {
    return (
            <>
                <tr>
                    <td width="5%">
                        <div className="mdc-checkbox">
                            <input type="checkbox"
                                           id="basic-disabled-checkbox"
                                           className="mdc-checkbox__native-control" defaultChecked/>
                                           <div className="mdc-checkbox__background">
                                               <svg className="mdc-checkbox__checkmark"
                                             viewBox="0 0 24 24">
                                                   <path className="mdc-checkbox__checkmark-path"
                                                  fill="none"
                                                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                               </svg>
                                        <div className="mdc-checkbox__mixedmark"></div>
                                    </div>
                                </div>
                    </td>
                    <td>
                        <label htmlFor="basic-disabled-checkbox"
                                       id="basic-disabled-checkbox-label">{eachTodo.task}</label>
                    </td>
                    <td>
                        <label htmlFor="basic-disabled-checkbox"
                               id="basic-disabled-checkbox-label">{eachTodo.complete}</label>
                    </td>

                    <td width="5%">
                        <i className="material-icons remove" onClick={() => eachTodo.removeTask(eachTodo.id)}>close</i>
                    </td>
                </tr>
            </>
    )
}

export default Todo;
