import '../styles/global.css'
import '../styles/pages/Home.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import MainPanel from '../components/MainPanel.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <MainPanel />
      <Link to="/ideas">Ideas</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/reminders">Reminder</Link>
      <Link to="/to-do">To Do</Link>
    </>
  );
}

export default Home;
