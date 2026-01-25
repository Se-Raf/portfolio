import './ExperienceSummary.css';

import experience from '../data/experience.json';

const ExperienceSummary = () => {

    return (
        <div className="experience-summary">
            <h2>Experience</h2>
            <div className="summary-list">
                {experience.map((item, index) => (
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

export default ExperienceSummary;
