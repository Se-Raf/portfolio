import certifications from '../data/certifications.json';

const Certification = () => {

    return (
        <div className="certification-page">
            <h1>Certifications</h1>
            <div className="certification-list">
                {certifications.map((item, index) => (
                    <div key={index} className="certification-item">
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

export default Certification;
