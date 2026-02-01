const Menu = ({ onSelect, activeSection }) => {
    return (
        <nav className="menu">
            <div className="menu-list d-flex justify-content-between">
                <div>
                    <button
                        className={`menu-button ${activeSection === 'experience' ? 'active' : ''}`}
                        onClick={() => onSelect('experience')}
                    >
                        Experience
                    </button>
                </div>
                <div>
                    <button
                        className={`menu-button ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={() => onSelect('projects')}
                    >
                        Projects
                    </button>
                </div>
                <div>
                    <button
                        className={`menu-button     ${activeSection === 'tech-stack' ? 'active' : ''}`}
                        onClick={() => onSelect('tech-stack')}
                    >
                        Tech Stack
                    </button>
                </div>
                <div>
                    <button
                        className={`menu-button ${activeSection === 'certifications' ? 'active' : ''}`}
                        onClick={() => onSelect('certifications')}
                    >
                        Certifications
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
