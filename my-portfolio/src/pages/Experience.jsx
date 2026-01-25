import experience from '../data/experience.json';

const Experience = () => {

    return (
        <div className="experience-page">
            <h1>Experience</h1>
            <div className="experience-list">
                {experience.map((item, index) => (
                    <div key={index} className="experience-item">
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

export default Experience;
