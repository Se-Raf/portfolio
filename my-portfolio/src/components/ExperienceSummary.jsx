import './ExperienceSummary.css';

import experience from '../data/experience.json';

const ExperienceSummary = () => {

    return (
        <div className="experience-summary">
            <h2>Experience</h2>
            <div className="summary-list">
                {[...experience].sort((a, b) => {
                    const getYear = (y) => {
                        const match = y.match(/\d{4}/);
                        return match ? parseInt(match[0]) : 0;
                    };
                    return getYear(b.Year) - getYear(a.Year);
                }).map((item, index) => (
                    <div key={index} className="summary-item">
                        {item.Image && <img src={item.Image} alt={item.Title} className="summary-image" />}
                        <h3>{item.Title}</h3>
                        <p>{item.Company}</p>
                        <p>{item.Year}</p>
                        <p>{item.Description}</p>
                        <div className="tech-stack-list">
                            {item.TechStack.map((tech, index) => (
                                <button key={index} className="tech-pill" onClick={() => console.log(`Clicked ${tech}`)}>
                                    {tech}
                                </button>
                            ))}
                        </div>
                        <ul>
                            {item.Responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSummary;
