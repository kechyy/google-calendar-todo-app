import react from 'react'
import {Footer, Navbar, Sidebar} from "../../components";
import Todo from "../todo/Todo";
import React from "react";


const Calendar = () => {
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
                                        <h1> Todo Calendar</h1>
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

export default Calendar;
