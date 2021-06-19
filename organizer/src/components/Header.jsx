import { Link } from 'react-router-dom'
import '../styles/components/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link className='bubble header-title' to="/">Organizer</Link>

            <nav>
                <ul className='list'>
                    <li className='bubble list-item'><a href="https://www.linkedin.com/in/julio-sergio-ferreira-silva/"><img className='header-icon' src="https://i.imgur.com/yqGcLJV.png" alt="Linkedin" /></a></li>
                    <li className='bubble list-item'><a href="https://github.com/JulioSergioFS"><img className='header-icon' src="https://i.imgur.com/JoWiSzS.png" alt="GitHub" /></a></li>
                    <li className='bubble list-item'><a href="https://juliosergiofs.medium.com/"><img className='header-icon' src="https://i.imgur.com/qGLHVwy.png" alt="Medium" /></a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header
