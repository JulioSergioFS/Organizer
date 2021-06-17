import Header from '../../components/Header.jsx'
import './index.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <Link to="/ideas">Ideas</Link>
    </>
  );
}

export default Home;
