import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul className='navbar'>
                <li className='navItem'>
                    <Link to='/home'>Home</Link>
                </li>
                <li className='navItem'>
                    <Link to='/about-me'>About Me</Link>
                </li>
                <li className='navItem'>
                    <Link to='/contact-me'>Contact Me</Link>
                </li>
                <li className='navItem'>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
    );
}