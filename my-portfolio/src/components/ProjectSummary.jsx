import './ProjectSummary.css';

import projects from '../data/projects.json';

const ProjectSummary = () => {

    return (
        <div className="project-summary">
            <h2>Projects</h2>
            <div className="summary-list">
                {projects.map((item, index) => (
                    <div key={index} className="summary-item">
                        {item.Image && <img src={item.Image} alt={item.Title} className="summary-image" />}
                        <h3>{item.Title}</h3>
                        <p>{item.Description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSummary;
