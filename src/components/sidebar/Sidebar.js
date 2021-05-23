import React from 'react';
import logo from './images/logo.png';
import { Link }  from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
            <div className="mdc-drawer__header">
                <a href="index.html" className="brand-logo">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className="mdc-drawer__content">
                <div className="mdc-list-group">
                    <nav className="mdc-list mdc-drawer-menu">
                        <div className="mdc-drawer-title">
                            TODO APPLICATION
                        </div>
                        <div className="mdc-list-item mdc-drawer-item">
                            <Link to="/" className="mdc-drawer-link">
                                <i className="material-icons-outlined mdc-list-item__start-detail mdc-drawer-item-icon"
                                   aria-hidden="true">event</i>
                                Todo list
                            </Link>
                        </div>
                        <div className="mdc-list-item mdc-drawer-item">
                            <Link className="mdc-drawer-link" to="/calendar">
                                <i className="material-icons-outlined mdc-list-item__start-detail mdc-drawer-item-icon"
                                   aria-hidden="true">calendar_today</i>
                                Calendar
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar;
