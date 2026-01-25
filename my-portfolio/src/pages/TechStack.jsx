import techStack from '../data/techStack.json';

const TechStack = () => {

    return (
        <div className="tech-stack-page">
            <h1>Tech Stack</h1>
            <div className="tech-list">
                {techStack.map((item, index) => (
                    <div key={index} className="tech-item">
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

export default TechStack;
