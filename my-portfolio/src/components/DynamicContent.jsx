import ExperienceSummary from './ExperienceSummary';
import ProjectSummary from './ProjectSummary';
import TechStackSummary from './TechStackSummary';
import CertificationSummary from './CertificationSummary';
import './DynamicContent.css';

const DynamicContent = ({ activeSection }) => {
    const renderContent = () => {
        switch (activeSection) {
            case 'experience':
                return <ExperienceSummary />;
            case 'projects':
                return <ProjectSummary />;
            case 'tech-stack':
                return <TechStackSummary />;
            case 'certifications':
                return <CertificationSummary />;
            default:
                return (
                    <div className="dynamic-content-placeholder">
                        <p>Select an item from the menu to view details.</p>
                    </div>
                );
        }
    };

    return (
        <div className="dynamic-content-container">
            {renderContent()}
        </div>
    );
};

export default DynamicContent;
