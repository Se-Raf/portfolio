import projects from '../data/projects.json';

const Project = () => {

    return (
        <div className="project-page">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map((item, index) => (
                    <div key={index} className="project-item">
                        <img src={item.Image} alt={item.Title} />
                        <h2>{item.Title}</h2>
                        <span className="year">{item.Year}</span>
                        <p>{item.Description}</p>
                        <div className="dates">
                            <small>Created: {item.CreatedDate}</small>
                            <small>Modified: {item.ModifiedDate}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
