import './TechStackSummary.css';

import techStack from '../data/techStack.json';

const TechStackSummary = () => {

    return (
        <div className="tech-stack-summary">
            <h2>Tech Stack</h2>
            <div className="summary-list">
                {techStack.map((item, index) => (
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

export default TechStackSummary;
