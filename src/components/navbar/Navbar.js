import React from 'react';

const Navbar =  () => {
    return (
        <header className="mdc-top-app-bar">
            <div className="mdc-top-app-bar__row">
                <div
                    className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start mdc-top-app-bar__section-left">
                    <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button sidebar-toggler">
                        menu
                    </button>
                    <div className="menu-button-container d-none d-xl-block">
                        <div className="mdc-menu mdc-menu-surface" tabIndex="-1" id="page-menu">
                            <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                                <li className="mdc-list-item" role="menuitem">
                                    <h6 className="item-subject font-weight-normal">
                                        Bookings
                                    </h6>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <h6 className="item-subject font-weight-normal">
                                        Testing
                                    </h6>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <h6 className="item-subject font-weight-normal">
                                        Read
                                    </h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end mdc-top-app-bar__section-right">
                    <div className="menu-button-container d-none d-md-block">
                        <button className="mdc-button mdc-menu-button">
                            <i className="material-icons-outlined">
                                assignment_returned
                            </i>
                        </button>
                        <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                            <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon-only">
                                        <i className="material-icons-outlined text-primary">
                                            lock
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            Lock screen
                                        </h6>
                                    </div>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon-only">
                                        <i className="material-icons-outlined text-primary">
                                            power_settings_new
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">Logout</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-button-container">
                        <button className="mdc-button mdc-menu-button">
                            <i className="material-icons-outlined text-primary">
                                check_circle
                            </i>
                        </button>
                        <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                            <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon-only">
                                        <i className="material-icons-outlined text-primary">
                                            info
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            Settings
                                        </h6>
                                    </div>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon-only">
                                        <i className="material-icons-outlined text-primary">
                                            vertical_align_bottom
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">Update</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-button-container d-none d-md-block">
                        <button className="mdc-button mdc-menu-button">
                            <i className="material-icons-outlined text-primary">
                                print
                            </i>
                        </button>
                        <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                            <h6 className="title d-flex align-items-center">
                                <i className="material-icons-outlined text-primary mr-2">
                                    email
                                </i>
                                Messages
                            </h6>
                            <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail">
                                        <img src="https://via.placeholder.com/36x36" alt="user"/>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            Mark send you a message
                                        </h6>
                                        <small className="text-muted"> 1 Minutes ago </small>
                                    </div>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail">
                                        <img src="https://via.placeholder.com/36x36" alt="user"/>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            Cregh send you a message
                                        </h6>
                                        <small className="text-muted"> 15 Minutes ago </small>
                                    </div>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail">
                                        <img src="https://via.placeholder.com/36x36" alt="user"/>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            Profile picture updated
                                        </h6>
                                        <small className="text-muted"> 18 Minutes ago </small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-button-container menu-profile">
                        <button className="mdc-button mdc-menu-button">
                  <span className="d-flex align-items-center">
                    <span className="figure">
                      <img src="https://via.placeholder.com/36x36" alt="user" clas="user"/>
                    </span>
                    <span className="user-name">Nkechi Rosemary</span><i
                      className="material-icons">arrow_drop_down</i>
                  </span>
                        </button>
                        <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                            <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon-only">
                                        <i className="material-icons-outlined text-primary">
                                            supervisor_account
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            Edit profile
                                        </h6>
                                    </div>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon-only">
                                        <i className="material-icons-outlined text-primary">
                                            settings
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">Logout</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-button-container pl-2">
                        <button className="mdc-button mdc-menu-button">
                            <i className="material-icons-outlined text-primary">
                                notifications
                            </i>
                        </button>
                        <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                            <h6 className="title d-flex align-items-center">
                                <i className="material-icons-outlined text-primary">
                                    notifications
                                </i>
                                Notifications
                            </h6>
                            <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon">
                                        <i className="material-icons-outlined text-info">
                                            email
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            You received a new message
                                        </h6>
                                        <small className="text-muted"> 6 min ago </small>
                                    </div>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon">
                                        <i className="material-icons-outlined text-success">
                                            supervised_user_circle
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            New user registered
                                        </h6>
                                        <small className="text-muted"> 15 min ago </small>
                                    </div>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon">
                                        <i className="material-icons-outlined text-warning">
                                            error_outline
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            System Alert
                                        </h6>
                                        <small className="text-muted"> 2 days ago </small>
                                    </div>
                                </li>
                                <li className="mdc-list-item" role="menuitem">
                                    <div className="item-thumbnail item-thumbnail-icon">
                                        <i className="material-icons-outlined text-danger">
                                            system_update_alt
                                        </i>
                                    </div>
                                    <div
                                        className="item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="item-subject font-weight-normal">
                                            You have a new update
                                        </h6>
                                        <small className="text-muted"> 3 days ago </small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar;
