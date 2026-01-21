import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu-list d-flex justify-content-between">
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/tech-stack">Tech Stack</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
