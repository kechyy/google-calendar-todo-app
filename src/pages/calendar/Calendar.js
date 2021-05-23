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
                                        <div id="calendar" className="full-calendar fc fc-ltr fc-unthemed">
                                            <div className="fc-toolbar fc-header-toolbar">
                                                <div className="fc-left">
                                                    <div className="fc-button-group">
                                                        <button type="button"
                                                                className="fc-prevYear-button fc-button fc-button-primary"
                                                                aria-label="prevYear"><span
                                                            className="fc-icon fc-icon-chevrons-left"></span></button>
                                                        <button type="button"
                                                                className="fc-prev-button fc-button fc-button-primary"
                                                                aria-label="prev"><span
                                                            className="fc-icon fc-icon-chevron-left"></span></button>
                                                        <button type="button"
                                                                className="fc-next-button fc-button fc-button-primary"
                                                                aria-label="next"><span
                                                            className="fc-icon fc-icon-chevron-right"></span></button>
                                                        <button type="button"
                                                                className="fc-nextYear-button fc-button fc-button-primary"
                                                                aria-label="nextYear"><span
                                                            className="fc-icon fc-icon-chevrons-right"></span></button>
                                                    </div>
                                                    <button type="button"
                                                            className="fc-today-button fc-button fc-button-primary">today
                                                    </button>
                                                </div>
                                                <div className="fc-center"><h2>February 2020</h2></div>
                                                <div className="fc-right">
                                                    <div className="fc-button-group">
                                                        <button type="button"
                                                                className="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active">month
                                                        </button>
                                                        <button type="button"
                                                                className="fc-dayGridWeek-button fc-button fc-button-primary">week
                                                        </button>
                                                        <button type="button"
                                                                className="fc-dayGridDay-button fc-button fc-button-primary">day
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fc-view-container">
                                                <div className="fc-view fc-dayGridMonth-view fc-dayGrid-view">
                                                    <table className="">
                                                        <thead className="fc-head">
                                                        <tr>
                                                            <td className="fc-head-container fc-widget-header">
                                                                <div className="fc-row fc-widget-header">
                                                                    <table className="">
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="fc-day-header fc-widget-header fc-sun">
                                                                                <span>Sun</span></th>
                                                                            <th className="fc-day-header fc-widget-header fc-mon">
                                                                                <span>Mon</span></th>
                                                                            <th className="fc-day-header fc-widget-header fc-tue">
                                                                                <span>Tue</span></th>
                                                                            <th className="fc-day-header fc-widget-header fc-wed">
                                                                                <span>Wed</span></th>
                                                                            <th className="fc-day-header fc-widget-header fc-thu">
                                                                                <span>Thu</span></th>
                                                                            <th className="fc-day-header fc-widget-header fc-fri">
                                                                                <span>Fri</span></th>
                                                                            <th className="fc-day-header fc-widget-header fc-sat">
                                                                                <span>Sat</span></th>
                                                                        </tr>
                                                                        </thead>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="fc-body">
                                                        <tr>
                                                            <td className="fc-widget-content">
                                                                <div className="fc-scroller fc-day-grid-container"
                                                                     style={{overflow: 'hidden', height: '759px'}}>
                                                                    <div className="fc-day-grid">
                                                                        <div
                                                                            className="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: '126px'}}>
                                                                            <div className="fc-bg">
                                                                                <table className="">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="fc-day fc-widget-content fc-sun fc-other-month fc-past"
                                                                                            data-date="2020-01-26"></td>
                                                                                        <td className="fc-day fc-widget-content fc-mon fc-other-month fc-past"
                                                                                            data-date="2020-01-27"></td>
                                                                                        <td className="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                                                                            data-date="2020-01-28"></td>
                                                                                        <td className="fc-day fc-widget-content fc-wed fc-other-month fc-past"
                                                                                            data-date="2020-01-29"></td>
                                                                                        <td className="fc-day fc-widget-content fc-thu fc-other-month fc-past"
                                                                                            data-date="2020-01-30"></td>
                                                                                        <td className="fc-day fc-widget-content fc-fri fc-other-month fc-past"
                                                                                            data-date="2020-01-31"></td>
                                                                                        <td className="fc-day fc-widget-content fc-sat fc-past"
                                                                                            data-date="2020-02-01"></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <td className="fc-day-top fc-sun fc-other-month fc-past"
                                                                                            data-date="2020-01-26"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-01-26&quot;,&quot;type&quot;:&quot;day&quot;}">26</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-mon fc-other-month fc-past"
                                                                                            data-date="2020-01-27"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-01-27&quot;,&quot;type&quot;:&quot;day&quot;}">27</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-tue fc-other-month fc-past"
                                                                                            data-date="2020-01-28"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-01-28&quot;,&quot;type&quot;:&quot;day&quot;}">28</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-wed fc-other-month fc-past"
                                                                                            data-date="2020-01-29"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-01-29&quot;,&quot;type&quot;:&quot;day&quot;}">29</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-thu fc-other-month fc-past"
                                                                                            data-date="2020-01-30"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-01-30&quot;,&quot;type&quot;:&quot;day&quot;}">30</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-fri fc-other-month fc-past"
                                                                                            data-date="2020-01-31"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-01-31&quot;,&quot;type&quot;:&quot;day&quot;}">31</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-sat fc-past"
                                                                                            data-date="2020-02-01"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-01&quot;,&quot;type&quot;:&quot;day&quot;}">1</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td className="fc-event-container">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-title">All Day Event</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-resizer fc-end-resizer"></div>
                                                                                            </a></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: '126px'}}>
                                                                            <div className="fc-bg">
                                                                                <table className="">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="fc-day fc-widget-content fc-sun fc-past"
                                                                                            data-date="2020-02-02"></td>
                                                                                        <td className="fc-day fc-widget-content fc-mon fc-past"
                                                                                            data-date="2020-02-03"></td>
                                                                                        <td className="fc-day fc-widget-content fc-tue fc-past"
                                                                                            data-date="2020-02-04"></td>
                                                                                        <td className="fc-day fc-widget-content fc-wed fc-past"
                                                                                            data-date="2020-02-05"></td>
                                                                                        <td className="fc-day fc-widget-content fc-thu fc-past"
                                                                                            data-date="2020-02-06"></td>
                                                                                        <td className="fc-day fc-widget-content fc-fri fc-past"
                                                                                            data-date="2020-02-07"></td>
                                                                                        <td className="fc-day fc-widget-content fc-sat fc-past"
                                                                                            data-date="2020-02-08"></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <td className="fc-day-top fc-sun fc-past"
                                                                                            data-date="2020-02-02"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-02&quot;,&quot;type&quot;:&quot;day&quot;}">2</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-mon fc-past"
                                                                                            data-date="2020-02-03"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-03&quot;,&quot;type&quot;:&quot;day&quot;}">3</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-tue fc-past"
                                                                                            data-date="2020-02-04"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-04&quot;,&quot;type&quot;:&quot;day&quot;}">4</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-wed fc-past"
                                                                                            data-date="2020-02-05"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-05&quot;,&quot;type&quot;:&quot;day&quot;}">5</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-thu fc-past"
                                                                                            data-date="2020-02-06"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-06&quot;,&quot;type&quot;:&quot;day&quot;}">6</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-fri fc-past"
                                                                                            data-date="2020-02-07"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-07&quot;,&quot;type&quot;:&quot;day&quot;}">7</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-sat fc-past"
                                                                                            data-date="2020-02-08"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-08&quot;,&quot;type&quot;:&quot;day&quot;}">8</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td className="fc-event-container"
                                                                                            colSpan="2"><a
                                                                                            className="fc-day-grid-event fc-h-event fc-event fc-start fc-not-end fc-draggable">
                                                                                            <div className="fc-content">
                                                                                                <span
                                                                                                    className="fc-title">Long Event</span>
                                                                                            </div>
                                                                                        </a></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: '126px'}}>
                                                                            <div className="fc-bg">
                                                                                <table className="">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="fc-day fc-widget-content fc-sun fc-past"
                                                                                            data-date="2020-02-09"></td>
                                                                                        <td className="fc-day fc-widget-content fc-mon fc-past"
                                                                                            data-date="2020-02-10"></td>
                                                                                        <td className="fc-day fc-widget-content fc-tue fc-past"
                                                                                            data-date="2020-02-11"></td>
                                                                                        <td className="fc-day fc-widget-content fc-wed fc-past"
                                                                                            data-date="2020-02-12"></td>
                                                                                        <td className="fc-day fc-widget-content fc-thu fc-past"
                                                                                            data-date="2020-02-13"></td>
                                                                                        <td className="fc-day fc-widget-content fc-fri fc-past"
                                                                                            data-date="2020-02-14"></td>
                                                                                        <td className="fc-day fc-widget-content fc-sat fc-past"
                                                                                            data-date="2020-02-15"></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <td className="fc-day-top fc-sun fc-past"
                                                                                            data-date="2020-02-09"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-09&quot;,&quot;type&quot;:&quot;day&quot;}">9</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-mon fc-past"
                                                                                            data-date="2020-02-10"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-10&quot;,&quot;type&quot;:&quot;day&quot;}">10</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-tue fc-past"
                                                                                            data-date="2020-02-11"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-11&quot;,&quot;type&quot;:&quot;day&quot;}">11</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-wed fc-past"
                                                                                            data-date="2020-02-12"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-12&quot;,&quot;type&quot;:&quot;day&quot;}">12</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-thu fc-past"
                                                                                            data-date="2020-02-13"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-13&quot;,&quot;type&quot;:&quot;day&quot;}">13</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-fri fc-past"
                                                                                            data-date="2020-02-14"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-14&quot;,&quot;type&quot;:&quot;day&quot;}">14</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-sat fc-past"
                                                                                            data-date="2020-02-15"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-15&quot;,&quot;type&quot;:&quot;day&quot;}">15</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="fc-event-container">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-not-start fc-end fc-draggable fc-resizable">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-title">Long Event</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-resizer fc-end-resizer"></div>
                                                                                            </a></td>
                                                                                        <td rowSpan="6"></td>
                                                                                        <td className="fc-event-container"
                                                                                            colSpan="2"><a
                                                                                            className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable">
                                                                                            <div className="fc-content">
                                                                                                <span
                                                                                                    className="fc-title">Conference</span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="fc-resizer fc-end-resizer"></div>
                                                                                        </a></td>
                                                                                        <td className="fc-event-container"
                                                                                            rowSpan="6"><a
                                                                                            className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                                                            <div className="fc-content">
                                                                                                <span
                                                                                                    className="fc-time">7a</span>
                                                                                                <span
                                                                                                    className="fc-title">Birthday Party</span>
                                                                                            </div>
                                                                                        </a></td>
                                                                                        <td rowSpan="6"></td>
                                                                                        <td rowSpan="6"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="fc-event-container"
                                                                                            rowSpan="5"><a
                                                                                            className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                                                            <div className="fc-content">
                                                                                                <span
                                                                                                    className="fc-time">4p</span>
                                                                                                <span
                                                                                                    className="fc-title">Repeating Event</span>
                                                                                            </div>
                                                                                        </a></td>
                                                                                        <td rowSpan="5"></td>
                                                                                        <td className="fc-event-container">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-time">10:30a</span>
                                                                                                    <span
                                                                                                        className="fc-title">Meeting</span>
                                                                                                </div>
                                                                                            </a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="fc-event-container">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-time">12p</span>
                                                                                                    <span
                                                                                                        className="fc-title">Lunch</span>
                                                                                                </div>
                                                                                            </a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="fc-event-container fc-limited">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-time">2:30p</span>
                                                                                                    <span
                                                                                                        className="fc-title">Meeting</span>
                                                                                                </div>
                                                                                            </a></td>
                                                                                        <td className="fc-more-cell"
                                                                                            rowSpan="1">
                                                                                            <div><a className="fc-more">+3
                                                                                                more</a></div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className="fc-limited">
                                                                                        <td className="fc-event-container">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-time">5:30p</span>
                                                                                                    <span
                                                                                                        className="fc-title">Happy Hour</span>
                                                                                                </div>
                                                                                            </a></td>
                                                                                    </tr>
                                                                                    <tr className="fc-limited">
                                                                                        <td className="fc-event-container">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-time">8p</span>
                                                                                                    <span
                                                                                                        className="fc-title">Dinner</span>
                                                                                                </div>
                                                                                            </a></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: '126px'}}>
                                                                            <div className="fc-bg">
                                                                                <table className="">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="fc-day fc-widget-content fc-sun fc-past"
                                                                                            data-date="2020-02-16"></td>
                                                                                        <td className="fc-day fc-widget-content fc-mon fc-past"
                                                                                            data-date="2020-02-17"></td>
                                                                                        <td className="fc-day fc-widget-content fc-tue fc-past"
                                                                                            data-date="2020-02-18"></td>
                                                                                        <td className="fc-day fc-widget-content fc-wed fc-past"
                                                                                            data-date="2020-02-19"></td>
                                                                                        <td className="fc-day fc-widget-content fc-thu fc-past"
                                                                                            data-date="2020-02-20"></td>
                                                                                        <td className="fc-day fc-widget-content fc-fri fc-past"
                                                                                            data-date="2020-02-21"></td>
                                                                                        <td className="fc-day fc-widget-content fc-sat fc-past"
                                                                                            data-date="2020-02-22"></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <td className="fc-day-top fc-sun fc-past"
                                                                                            data-date="2020-02-16"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-16&quot;,&quot;type&quot;:&quot;day&quot;}">16</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-mon fc-past"
                                                                                            data-date="2020-02-17"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-17&quot;,&quot;type&quot;:&quot;day&quot;}">17</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-tue fc-past"
                                                                                            data-date="2020-02-18"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-18&quot;,&quot;type&quot;:&quot;day&quot;}">18</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-wed fc-past"
                                                                                            data-date="2020-02-19"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-19&quot;,&quot;type&quot;:&quot;day&quot;}">19</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-thu fc-past"
                                                                                            data-date="2020-02-20"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-20&quot;,&quot;type&quot;:&quot;day&quot;}">20</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-fri fc-past"
                                                                                            data-date="2020-02-21"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-21&quot;,&quot;type&quot;:&quot;day&quot;}">21</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-sat fc-past"
                                                                                            data-date="2020-02-22"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-22&quot;,&quot;type&quot;:&quot;day&quot;}">22</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="fc-event-container">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-time">4p</span>
                                                                                                    <span
                                                                                                        className="fc-title">Repeating Event</span>
                                                                                                </div>
                                                                                            </a></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: '126px'}}>
                                                                            <div className="fc-bg">
                                                                                <table className="">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="fc-day fc-widget-content fc-sun fc-past"
                                                                                            data-date="2020-02-23"></td>
                                                                                        <td className="fc-day fc-widget-content fc-mon fc-past"
                                                                                            data-date="2020-02-24"></td>
                                                                                        <td className="fc-day fc-widget-content fc-tue fc-past"
                                                                                            data-date="2020-02-25"></td>
                                                                                        <td className="fc-day fc-widget-content fc-wed fc-past"
                                                                                            data-date="2020-02-26"></td>
                                                                                        <td className="fc-day fc-widget-content fc-thu fc-past"
                                                                                            data-date="2020-02-27"></td>
                                                                                        <td className="fc-day fc-widget-content fc-fri fc-past"
                                                                                            data-date="2020-02-28"></td>
                                                                                        <td className="fc-day fc-widget-content fc-sat fc-past"
                                                                                            data-date="2020-02-29"></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <td className="fc-day-top fc-sun fc-past"
                                                                                            data-date="2020-02-23"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-23&quot;,&quot;type&quot;:&quot;day&quot;}">23</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-mon fc-past"
                                                                                            data-date="2020-02-24"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-24&quot;,&quot;type&quot;:&quot;day&quot;}">24</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-tue fc-past"
                                                                                            data-date="2020-02-25"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-25&quot;,&quot;type&quot;:&quot;day&quot;}">25</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-wed fc-past"
                                                                                            data-date="2020-02-26"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-26&quot;,&quot;type&quot;:&quot;day&quot;}">26</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-thu fc-past"
                                                                                            data-date="2020-02-27"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-27&quot;,&quot;type&quot;:&quot;day&quot;}">27</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-fri fc-past"
                                                                                            data-date="2020-02-28"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-28&quot;,&quot;type&quot;:&quot;day&quot;}">28</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-sat fc-past"
                                                                                            data-date="2020-02-29"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-02-29&quot;,&quot;type&quot;:&quot;day&quot;}">29</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td className="fc-event-container">
                                                                                            <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable"
                                                                                               href="http://google.com/">
                                                                                                <div
                                                                                                    className="fc-content">
                                                                                                    <span
                                                                                                        className="fc-title">Click for Google</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-resizer fc-end-resizer"></div>
                                                                                            </a></td>
                                                                                        <td></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="fc-row fc-week fc-widget-content fc-rigid"
                                                                            style={{height: '129px'}}>
                                                                            <div className="fc-bg">
                                                                                <table className="">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="fc-day fc-widget-content fc-sun fc-other-month fc-past"
                                                                                            data-date="2020-03-01"></td>
                                                                                        <td className="fc-day fc-widget-content fc-mon fc-other-month fc-past"
                                                                                            data-date="2020-03-02"></td>
                                                                                        <td className="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                                                                            data-date="2020-03-03"></td>
                                                                                        <td className="fc-day fc-widget-content fc-wed fc-other-month fc-past"
                                                                                            data-date="2020-03-04"></td>
                                                                                        <td className="fc-day fc-widget-content fc-thu fc-other-month fc-past"
                                                                                            data-date="2020-03-05"></td>
                                                                                        <td className="fc-day fc-widget-content fc-fri fc-other-month fc-past"
                                                                                            data-date="2020-03-06"></td>
                                                                                        <td className="fc-day fc-widget-content fc-sat fc-other-month fc-past"
                                                                                            data-date="2020-03-07"></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <td className="fc-day-top fc-sun fc-other-month fc-past"
                                                                                            data-date="2020-03-01"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-03-01&quot;,&quot;type&quot;:&quot;day&quot;}">1</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-mon fc-other-month fc-past"
                                                                                            data-date="2020-03-02"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-03-02&quot;,&quot;type&quot;:&quot;day&quot;}">2</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-tue fc-other-month fc-past"
                                                                                            data-date="2020-03-03"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-03-03&quot;,&quot;type&quot;:&quot;day&quot;}">3</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-wed fc-other-month fc-past"
                                                                                            data-date="2020-03-04"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-03-04&quot;,&quot;type&quot;:&quot;day&quot;}">4</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-thu fc-other-month fc-past"
                                                                                            data-date="2020-03-05"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-03-05&quot;,&quot;type&quot;:&quot;day&quot;}">5</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-fri fc-other-month fc-past"
                                                                                            data-date="2020-03-06"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-03-06&quot;,&quot;type&quot;:&quot;day&quot;}">6</a>
                                                                                        </td>
                                                                                        <td className="fc-day-top fc-sat fc-other-month fc-past"
                                                                                            data-date="2020-03-07"><a
                                                                                            className="fc-day-number"
                                                                                            data-goto="{&quot;date&quot;:&quot;2020-03-07&quot;,&quot;type&quot;:&quot;day&quot;}">7</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                        <td></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
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

export default Calendar;
