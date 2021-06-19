import '../styles/components/MainPanel.css'
import React from 'react'
import { Link } from 'react-router-dom'

const MainPanel = () => {
    return (
        <div className='main-panel'>
            <Link to="/ideas" className='main-panel_item'>Ideas</Link>
            <Link to="/calendar" className='main-panel_item'>Calendar</Link>
            <Link to="/reminders" className='main-panel_item'>Reminder</Link>
            <Link to="/to-do" className='main-panel_item'>To Do</Link>
        </div>
    )
}

export default MainPanel
