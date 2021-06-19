import Header from '../../components/Header.jsx'
import './index.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <Link to="/ideas">Ideas</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/reminders">Reminder</Link>
      <Link to="/to-do">To Do</Link>
    </>
  );
}

export default Home;
