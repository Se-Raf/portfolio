const Menu = ({ onSelect, activeSection }) => {
    return (
        <nav className="menu">
            <ul className="menu-list d-flex justify-content-between">
                <li>
                    <button
                        className={`menu-button ${activeSection === 'experience' ? 'active' : ''}`}
                        onClick={() => onSelect('experience')}
                    >
                        Experience
                    </button>
                </li>
                <li>
                    <button
                        className={`menu-button ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={() => onSelect('projects')}
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button
                        className={`menu-button ${activeSection === 'tech-stack' ? 'active' : ''}`}
                        onClick={() => onSelect('tech-stack')}
                    >
                        Tech Stack
                    </button>
                </li>
                <li>
                    <button
                        className={`menu-button ${activeSection === 'certifications' ? 'active' : ''}`}
                        onClick={() => onSelect('certifications')}
                    >
                        Certifications
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
