import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', background: '#eee', marginBottom: '1rem' }}>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/tech-stack">Tech Stack</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
