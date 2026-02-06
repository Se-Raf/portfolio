import './EducationSummary.css';

import education from '../data/education.json';

const EducationSummary = () => {

    return (
        <div className="education-summary">
            <h2>Education</h2>
            <div className="summary-list">
                {education.map((item, index) => (
                    <div key={index} className="summary-item">
                        {item.Image && <img src={item.Image} alt={item.School} className="summary-image" />}
                        <h3>{item.School}</h3>
                        <p>{item.Degree}</p>
                        <p>{item.Year}</p>
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

export default EducationSummary;
