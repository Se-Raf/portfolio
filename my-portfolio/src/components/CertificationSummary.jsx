import './CertificationSummary.css';

import certifications from '../data/certifications.json';

const CertificationSummary = () => {

    return (
        <div className="certification-summary">
            <h2>Certifications</h2>
            <div className="summary-list">
                {certifications.map((item, index) => (
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

export default CertificationSummary;
