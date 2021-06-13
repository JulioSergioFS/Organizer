const Header = () => {
    return (
        <div className='header'>
            <a className='bubble header-title' href="will change later">Organizer</a>
            <nav>
                <ul className='list'>
                    <li className='bubble list-item'><a href="https://www.linkedin.com/in/julio-sergio-ferreira-silva/"><img className='header-icon' src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1623614920~hmac=0a734d732892691dce59d93b2463bda4" alt="Linkedin" /></a></li>
                    <li className='bubble list-item'><a href="https://github.com/JulioSergioFS"><img className='header-icon' src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="GitHub" /></a></li>
                    <li className='bubble list-item'><a href="https://juliosergiofs.medium.com/"><img className='header-icon' src="https://lh3.googleusercontent.com/proxy/79MNuyGIJZV9KLx8ngylbtLbDYXYx517QfZ2od56BG6vtmCuT9cweV-hn3h1863vUuqxdCiNGnBktV2c2W310N9IMeVkMQU86jA92vQ2tYbB6uhUHi1F8Q" alt="Medium" /></a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header