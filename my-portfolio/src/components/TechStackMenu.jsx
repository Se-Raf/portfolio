import './TechStackMenu.css';

const TechStackMenu = () => {
    const techStack = ['C#', '.Net', 'SQL', 'MongoDb', 'Javascript', 'PHP'];

    return (
        <div className="tech-stack-menu">
            <div className="tech-stack-list">
                {techStack.map((tech, index) => (
                    <button key={index} className="tech-pill" onClick={() => console.log(`Clicked ${tech}`)}>
                        {tech}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TechStackMenu;
